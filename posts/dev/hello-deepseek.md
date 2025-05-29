---
url: 'https://zhaobc.site/posts/dev/hello-deepseek.md'
---
# DeepSeek 初体验

春节期间，DeepSeek 真是大火，手头正好有个需求，我就体验了一下。
**它真的是很强大**。

这里仅是简单记录一下，它生成的代码，更多关于 DeepSeek 的使用，大家可以去官网查看。

## 需求

我需要一个分割 DOM 树的功能，根据指定的节点，将 DOM 树分割成两个 DOM 树。
一开始试了几个 DeepSeek 和 豆包 AI，都没达到想要的效果。

随后，重新提了自己的需求，将需求更明确化之后，试了一下 DeepSeek，它经过 5 分钟的推理之后，给出了一个非常不错的答案。

需求描述如下：

> 帮我用javascript写一段按指定节点分割dom树的代码，分割后的dom树依旧内容完整。dom树可以是多层嵌套的。指定节点之前的dom树内容到该节点结束，自动补全剩余的dom树结束符。指定节点之后的dom树内容以该节点开始，自动补全之前的dom树开始符。

## 生成结果

以下是实现按指定节点分割DOM树的JavaScript代码，返回分割后的两个完整DOM结构：

注：原来是以整个 document 来处理的，稍微改了一下，接受指定的 root。

```javascript
// function splitDOMAtNode(originalNode) {
function splitDOMAtNode(root, originalNode) {
  // 深克隆整个DOM树并建立原始节点映射
  function cloneTreeWithMap(root) {
    const nodeMap = new Map()
    function clone(node) {
      const cloned = node.cloneNode(false)
      nodeMap.set(node, cloned)
      Array.from(node.childNodes).forEach(child => {
        cloned.appendChild(clone(child))
      })
      return cloned
    }
    return { clonedTree: clone(root), nodeMap }
  }

  // 修剪后续兄弟节点
  function pruneSiblingsAfter(node) {
    let current = node
    while (current.parentNode) {
      const parent = current.parentNode
      const siblings = Array.from(parent.childNodes)
      const idx = siblings.indexOf(current)

      // 移除当前节点之后的所有节点
      for (let i = siblings.length - 1; i > idx; i--) {
        parent.removeChild(siblings[i])
      }
      current = parent
    }
  }

  // 修剪前置兄弟节点
  function pruneSiblingsBefore(node) {
    let current = node
    while (current.parentNode) {
      const parent = current.parentNode
      const siblings = Array.from(parent.childNodes)
      const idx = siblings.indexOf(current)

      // 移除当前节点之前的所有节点
      for (let i = 0; i < idx; i++) {
        parent.removeChild(siblings[i])
      }
      current = parent
    }
  }

  // // 获取文档根节点
  // const docRoot = originalNode.ownerDocument.documentElement;

  // 处理前半部分
  // const front = cloneTreeWithMap(docRoot);
  const front = cloneTreeWithMap(root)
  const frontNode = front.nodeMap.get(originalNode)
  pruneSiblingsAfter(frontNode)

  // 处理后半部分
  // const back = cloneTreeWithMap(docRoot);
  const back = cloneTreeWithMap(root)
  const backNode = back.nodeMap.get(originalNode)
  pruneSiblingsBefore(backNode)

  return {
    frontFragment: front.clonedTree,
    backFragment: back.clonedTree,
  }
}

// 使用示例
const targetNode = document.getElementById('split-target')
const { frontFragment, backFragment } = splitDOMAtNode(targetNode)

// 获取HTML字符串
console.log('前半部分：\n', frontFragment.outerHTML)
console.log('后半部分：\n', backFragment.outerHTML)
```

### 实现原理

1. **深度克隆**：使用递归方式克隆整个DOM树，并建立原始节点到克隆节点的映射关系
2. **节点修剪**：
   * 前半部分：从目标节点向上遍历，逐层移除当前节点之后的所有兄弟节点
   * 后半部分：从目标节点向上遍历，逐层移除当前节点之前的所有兄弟节点
3. **保持结构完整**：通过逐层处理父节点，确保生成的DOM片段保持完整的树形结构

### 使用说明

1. 传入需要分割的目标节点
2. 返回包含两个属性的对象：
   * `frontFragment`：包含目标节点及其之前内容的新DOM树
   * `backFragment`：包含目标节点及其之后内容的新DOM树
3. 可通过`outerHTML`属性获取完整HTML字符串

### 特点

* 保持原始DOM结构完整性
* 自动处理多层嵌套结构
* 不修改原始DOM树
* 返回标准DOM节点，可直接插入文档

> 注意：该方法会克隆整个文档，适用于中小型页面。对于超大DOM结构建议指定子树进行克隆以提升性能。

## 推理过程

由于推理过程较长，将其折叠起来，感兴趣的可以查看。

::: details 点击查看推理过程

```txt
好的，我现在需要帮用户写一段JavaScript代码，按指定节点分割DOM树，分割后的两部分要保持内容完整。这个问题看起来有点挑战性，我需要仔细分析用户的需求。

首先，用户希望将一个DOM树在指定节点处分割成两部分。分割后的前部分应该包含指定节点之前的所有内容，并且在该节点结束，自动补全剩下的结束标签。后部分则是从指定节点开始，补全之前的开始标签。这听起来像是要生成两个新的HTML片段，每个片段在结构上都是完整的，但分别以指定节点为结尾和开头。

接下来，我需要理解如何实现这个功能。可能需要遍历DOM树，分别处理分割点之前和之后的节点。对于前部分，需要从根节点开始，一直到指定节点，然后确保所有未闭合的标签都被正确闭合。对于后部分，可能需要从指定节点开始，向上补全所有父节点的开始标签，使得这个片段可以独立存在。

首先，处理前部分。当分割点在某个节点时，前部分需要包含该节点及其之前的所有兄弟节点，同时保证父节点的结构完整。比如，如果指定节点是某个div的第三个子节点，那么前部分应该包含该div的前三个子节点，并且闭合该div以及所有祖先节点。但用户可能希望前部分在指定节点处结束，所以可能需要克隆指定节点及其之前的兄弟节点，然后补全所有未闭合的标签。

然后是后部分，需要包含指定节点及其之后的兄弟节点，同时补全父节点的开始标签。例如，如果指定节点在某个div中，那么后部分的div应该从该节点开始，同时前面的父节点结构需要补全，但可能只需要从该节点所在层级往上补全。

但是，直接操作DOM树可能会有问题，因为DOM是动态的，修改会影响页面。所以可能需要先克隆节点，然后在副本上进行操作，避免影响实际页面。

可能的步骤是：

1. 找到指定节点，获取其父节点和所有兄弟节点。

2. 分割兄弟节点为前部分（直到指定节点）和后部分（从指定节点开始）。

3. 对于前部分，克隆父节点，将前部分兄弟节点添加到克隆的父节点中，然后递归处理所有祖先节点，确保结构完整。

4. 对于后部分，同样克隆父节点，将后部分兄弟节点添加进去，然后补全父节点的结构，可能需要向上构建父节点的开始部分。

不过，如何自动补全开始和结束标签呢？可能需要从指定节点向上遍历，克隆父节点结构，但只保留必要的子节点。例如，前部分需要父节点结构，但只包含到指定节点为止，并确保每个父节点都被正确闭合。后部分需要父节点结构，但只包含从指定节点开始的部分，并在前面补全父节点的开始标签。

或者，可以考虑生成HTML字符串，而不是操作实际的DOM节点。这样可以通过字符串操作来补全标签。例如，对于前部分，遍历从根到指定节点的路径，生成开始标签，直到指定节点，然后生成结束标签。但这样可能不太准确，因为DOM结构可能复杂，嵌套层次多。

或者，可以分别构建两个文档片段，前片段包含到指定节点为止的结构，后片段包含从指定节点开始的结构，同时补全必要的父节点。

可能需要一个函数来克隆指定节点及其祖先的结构，只保留必要的子节点。例如，对于前部分，克隆每个祖先节点，但只保留到指定节点为止的兄弟节点。对于后部分，克隆祖先节点，但只保留从指定节点开始的兄弟节点。

举个例子，假设指定节点是某个div中的第三个p标签。前部分需要生成一个包含该div的克隆，其中只有前三个p标签，然后闭合该div及其所有祖先。后部分则生成一个包含该div的克隆，其中从第三个p开始，同时这些克隆的div需要被包裹在祖先节点的结构中，但祖先的开始标签需要存在，而结束标签在适当的位置。

这似乎需要递归地处理每个父节点，克隆它们，并调整子节点列表为分割后的部分。例如，对于前部分：

function cloneAncestors(node, includeSiblingsBefore) {

if (!node.parentNode) return null;

const parentClone = node.parentNode.cloneNode(false); // 浅克隆，不包含子节点

const siblings = Array.from(node.parentNode.childNodes);

const index = siblings.indexOf(node);

const nodesToInclude = includeSiblingsBefore ? siblings.slice(0, index + 1) : siblings.slice(index);

nodesToInclude.forEach(child => {

if (child === node && includeSiblingsBefore) {

parentClone.appendChild(child.cloneNode(true)); // 可能需要深度克隆？

} else {

// 对于其他子节点，可能需要克隆并根据情况处理

// 这里可能需要递归处理，如果是前部分，只克隆前面的兄弟节点

// 但这样可能变得复杂，因为每个子节点可能还有自己的子节点

}

});

const higherAncestor = cloneAncestors(node.parentNode, includeSiblingsBefore);

if (higherAncestor) {

higherAncestor.appendChild(parentClone);

} else {

return parentClone;

}

}

这可能比较复杂，因为每个祖先节点都需要被克隆，并且其子节点需要被调整为分割后的部分。比如，父节点克隆后，子节点只包括到指定节点为止的前兄弟节点，或者从指定节点开始的后兄弟节点。

或者，对于前部分，从指定节点向上遍历，每个父节点克隆一个副本，该副本的子节点只包含到指定节点及其之前的兄弟节点。例如：

function buildFrontFragment(node) {

let current = node;

let fragment = null;

while (current.parentNode) {

const parentClone = current.parentNode.cloneNode(false);

const siblings = Array.from(current.parentNode.childNodes);

const index = siblings.indexOf(current);

const precedingSiblings = siblings.slice(0, index + 1);

precedingSiblings.forEach(sibling => {

if (sibling === current) {

parentClone.appendChild(sibling.cloneNode(true));

} else {

parentClone.appendChild(sibling.cloneNode(true)); // 或者是否需要处理嵌套？

}

});

if (fragment) {

parentClone.appendChild(fragment);

}

fragment = parentClone;

current = current.parentNode;

}

return fragment;

}

这可能生成一个从根到指定节点的结构，其中每个父节点只包含到当前节点为止的子节点。但这样的话，可能结构会被正确补全。例如，如果原结构是 body > div > p，指定节点是p，那么前部分的fragment会是body克隆，包含div克隆，div克隆包含p克隆。这样，当序列化为HTML时，会自动生成正确的闭合标签。

同样，后部分需要从指定节点开始，向上构建父节点，每个父节点克隆后只包含从指定节点开始的子节点，并且这些父节点被正确包裹。例如，同样使用类似的方法：

function buildBackFragment(node) {

let current = node;

let fragment = null;

while (current.parentNode) {

const parentClone = current.parentNode.cloneNode(false);

const siblings = Array.from(current.parentNode.childNodes);

const index = siblings.indexOf(current);

const followingSiblings = siblings.slice(index);

followingSiblings.forEach(sibling => {

if (sibling === current) {

parentClone.appendChild(sibling.cloneNode(true));

} else {

parentClone.appendChild(sibling.cloneNode(true));

}

});

if (fragment) {

parentClone.appendChild(fragment);

}

fragment = parentClone;

current = current.parentNode;

}

return fragment;

}

这样，后部分的fragment会包含从指定节点开始的所有后续兄弟节点，并且每个父节点都被克隆，只包含这些子节点。当序列化为HTML时，父节点的开始标签会被保留，而结束标签在最后。

但这样生成的fragment是否正确呢？例如，原结构是：

<div>

<p>1</p>

<p>2</p>

<p id="target">3</p>

<p>4</p>

</div>

如果指定节点是id为target的p，前部分应该生成：

<div>

<p>1</p>

<p>2</p>

<p id="target">3</p>

</div>

后部分应该生成：

<div>

<p id="target">3</p>

<p>4</p>

</div>

但按照上面的buildBackFragment函数，生成的div克隆会包含target和后续的p，但父结构可能更高层级的节点也被克隆。例如，如果div在body中，那么后部分的fragment会是body克隆包含div克隆，而div克隆包含target和后续的p。这样当序列化时，会有完整的结构，但用户可能需要后部分从target开始，即可能需要div从target开始，而不是整个body结构。

可能用户希望分割后的两个部分各自都是完整的HTML结构。比如，前部分可能是一个完整的HTML，包含到target为止的所有内容，后部分则是另一个完整HTML，从target开始的内容。但这可能不太现实，因为一个HTML只能有一个html根元素。或者用户可能希望得到两个DOM片段，每个片段在结构上是自洽的，可以独立存在。

或者，用户可能希望分割后的两个部分在DOM结构上各自闭合，比如前部分包含必要的父节点直到target，并闭合所有标签；后部分从target开始，并且有父节点的开始标签，以便结构正确。

例如，假设原结构是：

body > div.container > div.main > p#target

前部分应该生成：

body > div.container > div.main > p#target

后部分生成：

p#target 的父结构是 div.main > div.container > body，但后部分需要从p#target开始，所以结构应该是：

<div.main><div.container><body>（但body不能嵌套在div里，这显然有问题）

这说明直接克隆父结构可能会导致不正确的嵌套，尤其是当父元素是像body这样的顶层元素时。

因此，可能需要另一种方法：生成两个HTML片段，前部分包含到target为止的所有祖先，每个祖先节点只包含到target及其之前的兄弟节点，并闭合所有标签。后部分则包含target及其之后的兄弟节点，并在前面补全祖先的开始标签，但如何补全这些开始标签？

或者，可以考虑将前部分和后部分作为两个文档片段，其中前部分的结构是原始结构的一部分，直到target，并且自动闭合所有父标签；后部分的结构则是从target开始，并且前面自动打开父标签，直到根。

但如何实现这一点呢？

另一种思路是，前部分可以通过将target之后的所有兄弟节点删除，然后取其父节点的outerHTML。但是这样会修改原始DOM，不可行。所以需要使用克隆的方式。

例如，前部分的处理步骤：

1. 克隆整个文档的body元素（或者指定的根元素）。

2. 在克隆中，找到对应的target节点。

3. 从target的父节点开始，删除target之后的所有兄弟节点。

4. 递归向上处理所有父节点，确保每个父节点只保留到当前处理节点的位置。

类似地，后部分的处理：

1. 克隆整个文档的body元素。

2. 找到对应的target节点。

3. 删除target之前的所有兄弟节点。

4. 递归向上处理父节点，确保父节点只保留从当前节点开始的部分。

但这样可能需要修改克隆的DOM结构，确保每个父节点只保留必要的子节点。

例如，实现前部分的克隆：

function cloneAndPruneAfter(node, clonedNode) {

let current = clonedNode;

let original = node;

while (current.parentNode) {

const originalParent = original.parentNode;

const clonedParent = current.parentNode;

const siblings = Array.from(originalParent.childNodes);

const index = siblings.indexOf(original);

// 在克隆的父节点中，删除index之后的所有子节点

const clonedSiblings = Array.from(clonedParent.childNodes);

for (let i = clonedSiblings.length - 1; i > index; i--) {

clonedParent.removeChild(clonedSiblings[i]);

}

current = clonedParent;

original = originalParent;

}

return current; // 返回根克隆节点

}

然后，使用这个函数来处理克隆的节点。例如：

const originalRoot = document.documentElement; // 假设整个文档

const clonedRoot = originalRoot.cloneNode(true);

const clonedTarget = clonedRoot.querySelector('#target'); // 需要找到对应的克隆节点

cloneAndPruneAfter(node, clonedTarget);

这样，clonedRoot将只包含到target为止的结构。然后，可以将clonedRoot的outerHTML作为前部分的HTML。

同理，后部分需要克隆整个结构，然后删除target之前的兄弟节点：

function cloneAndPruneBefore(node, clonedNode) {

let current = clonedNode;

let original = node;

while (current.parentNode) {

const originalParent = original.parentNode;

const clonedParent = current.parentNode;

const siblings = Array.from(originalParent.childNodes);

const index = siblings.indexOf(original);

// 删除index之前的所有子节点

const clonedSiblings = Array.from(clonedParent.childNodes);

for (let i = 0; i < index; i++) {

clonedParent.removeChild(clonedSiblings[i]);

}

current = clonedParent;

original = originalParent;

}

return current;

}

但这里的问题是，当克隆整个文档时，如何找到对应的克隆节点？因为如果用户传入的node是原始文档中的节点，克隆后的节点在克隆树中的位置可能不同，需要找到对应的克隆节点。这可能需要一个映射，或者通过选择器重新查询，但这可能不可靠，尤其是当有多个相同选择器的情况下。

这似乎是一个挑战。例如，如果用户传入一个节点，要找到它在克隆树中的对应节点，可能需要遍历原始树和克隆树同步进行，或者给节点添加临时ID，然后在克隆树中查找。

或者，可以递归克隆，并在克隆时记录原始节点到克隆节点的映射。例如：

function cloneNodeWithMap(node, map) {

const clone = node.cloneNode(false); // 浅克隆

map.set(node, clone);

if (node.childNodes) {

node.childNodes.forEach(child => {

const childClone = cloneNodeWithMap(child, map);

clone.appendChild(childClone);

});

}

return clone;

}

const map = new Map();

const clonedRoot = cloneNodeWithMap(originalRoot, map);

const clonedTarget = map.get(originalTarget);

这样，map会保存原始节点到克隆节点的映射，可以快速找到克隆后的目标节点。

然后，对前部分和后部分进行处理：

处理前部分：

cloneAndPruneAfter(clonedTarget, clonedRoot);

const frontHtml = clonedRoot.outerHTML;

处理后部分：

cloneAndPruneBefore(clonedTarget, clonedRoot);

const backHtml = clonedRoot.outerHTML;

这可能是一个可行的方法。但需要注意，这样的操作可能会影响其他部分，比如事件监听器、属性等，但用户可能只需要结构，不需要事件等。

总结步骤：

1. 克隆整个DOM树（或指定的根节点），并建立原始节点到克隆节点的映射。

2. 找到克隆后的目标节点。

3. 对于前部分，从目标节点向上遍历，删除每个父节点中目标节点之后的所有兄弟节点。

4. 对于后部分，同样向上遍历，删除每个父节点中目标节点之前的所有兄弟节点。

5. 将处理后的克隆树的outerHTML输出，得到前部分和后部分的HTML字符串。

但用户可能需要的是将分割后的两部分作为DOM节点，而不仅仅是HTML字符串。或者用户可能需要返回两个文档片段。

但问题描述中提到“分割后的dom树依旧内容完整”，所以可能需要生成两个DOM片段，每个都是有效的结构。

现在，我需要考虑如何实现这个功能，并处理可能出现的边缘情况，比如目标节点是根节点、没有父节点、或处于深层嵌套结构中。

可能的代码结构：

function splitDOMAtNode(node) {

// 创建原始到克隆的映射

const map = new Map();

function cloneTree(originalNode) {

const clone = originalNode.cloneNode(false);

map.set(originalNode, clone);

Array.from(originalNode.childNodes).forEach(child => {

clone.appendChild(cloneTree(child));

});

return clone;

}

const clonedRoot = cloneTree(node.ownerDocument.documentElement);

const clonedNode = map.get(node);

// 前部分处理：删除目标节点之后的所有兄弟节点及其子树

function pruneAfter(clonedNode) {

let current = clonedNode;

while (current.parentNode) {

const parent = current.parentNode;

const siblings = Array.from(parent.childNodes);

const index = siblings.indexOf(current);

for (let i = siblings.length - 1; i > index; i--) {

parent.removeChild(siblings[i]);

}

current = parent;

}

}

// 后部分处理：删除目标节点之前的所有兄弟节点及其子树

function pruneBefore(clonedNode) {

let current = clonedNode;

while (current.parentNode) {

const parent = current.parentNode;

const siblings = Array.from(parent.childNodes);

const index = siblings.indexOf(current);

for (let i = 0; i < index; i++) {

parent.removeChild(siblings[i]);

}

current = parent;

}

}

// 创建前部分和后部分的克隆

const frontRoot = clonedRoot.cloneNode(true);

const frontClonedNode = map.get(node); // 这里可能有错误，因为frontRoot是新的克隆，之前的map可能不适用

// 这里发现一个问题，前面的cloneTree返回的是原始文档的克隆，但如果我们再次克隆frontRoot，那么需要重新建立映射，否则无法找到对应的clonedNode。

// 因此，正确的方法应该是分别克隆两次，一次用于前部分，一次用于后部分。

// 重新设计：

// 创建前部分的克隆树

const frontClonedRoot = cloneTree(node.ownerDocument.documentElement);

const frontClonedNode = map.get(node);

pruneAfter(frontClonedNode);

// 创建后部分的克隆树

const backClonedRoot = cloneTree(node.ownerDocument.documentElement);

const backClonedNode = map.get(node);

pruneBefore(backClonedNode);

return {

front: frontClonedRoot,

back: backClonedRoot

};

}

但这里的问题是，cloneTree函数在第二次调用时会覆盖map中的值，导致错误。因此，需要在每次克隆时使用新的map。

修改后的代码：

function splitDOMAtNode(originalNode) {

function cloneTreeWithMap(root) {

const map = new Map();

function clone(node) {

const cloned = node.cloneNode(false);

map.set(node, cloned);

Array.from(node.childNodes).forEach(child => {

cloned.appendChild(clone(child));

});

return cloned;

}

const clonedRoot = clone(root);

return { clonedRoot, map };

}

const root = originalNode.ownerDocument.documentElement;

// 克隆前部分

const { clonedRoot: frontRoot, map: frontMap } = cloneTreeWithMap(root);

const frontClonedNode = frontMap.get(originalNode);

pruneAfter(frontClonedNode);

// 克隆后部分

const { clonedRoot: backRoot, map: backMap } = cloneTreeWithMap(root);

const backClonedNode = backMap.get(originalNode);

pruneBefore(backClonedNode);

return {

front: frontRoot,

back: backRoot

};

}

function pruneAfter(clonedNode) {

let current = clonedNode;

while (current.parentNode) {

const parent = current.parentNode;

const siblings = Array.from(parent.childNodes);

const index = siblings.indexOf(current);

for (let i = siblings.length - 1; i > index; i--) {

parent.removeChild(siblings[i]);

}

current = parent;

}

}

function pruneBefore(clonedNode) {

let current = clonedNode;

while (current.parentNode) {

const parent = current.parentNode;

const siblings = Array.from(parent.childNodes);

const index = siblings.indexOf(current);

for (let i = 0; i < index; i++) {

parent.removeChild(siblings[i]);

}

current = parent;

}

}

这样，前部分和后部分各自独立克隆整个文档，并分别进行处理。然后返回处理后的克隆根节点。

测试一下，假设原结构如下：

<html>

<body>

<div class="container">

<p>1</p>

<p id="target">2</p>

<p>3</p>

</div>

</body>

</html>

调用splitDOMAtNode(target)后，frontRoot应该包含：

<html>

<body>

<div class="container">

<p>1</p>

<p id="target">2</p>

</div>

</body>

</html>

而backRoot应该包含：

<html>

<body>

<div class="container">

<p id="target">2</p>

<p>3</p>

</div>

</body>

</html>

这样，两部分的结构都是完整的，闭合正确。

但实际测试中，pruneAfter函数会从目标节点开始，向上遍历每个父节点，删除后面的兄弟节点。例如，在front克隆中，处理div.container时，删除target之后的p，即第三个p。然后在body和html层级，由于它们没有其他子节点在div之后，所以不会有变化。因此，生成的frontRoot结构正确。

同样，back克隆中，处理div.container时，删除target之前的p，即第一个p。然后向上遍历父节点，body和html中没有其他子节点在div之前，因此结构正确。

但这种方法是否适用于更复杂的嵌套结构？比如，如果目标节点在一个列表中的某个深层位置，父节点可能有多个层级，每个层级都需要修剪。

例如：

<html>

<body>

<div>

<ul>

<li>A</li>

<li>B

<ul>

<li>C</li>

<li id="target">D</li>

<li>E</li>

</ul>

</li>

<li>F</li>

</ul>

</div>

</body>

</html>

处理后的前部分应该包含到id为target的li为止：

<div>

<ul>

<li>A</li>

<li>B

<ul>

<li>C</li>

<li id="target">D</li>

</ul>

</li>

</ul>

</div>

后部分应该从target开始：

<div>

<ul>

<li>B

<ul>

<li id="target">D</li>

<li>E</li>

</ul>

</li>

<li>F</li>

</ul>

</div>

但根据pruneAfter的处理，当处理到li#target的父ul时，会删除其后的li。然后向上处理li B的父ul，删除其后的li F。再向上处理div，删除其后可能存在的兄弟节点？如果div是唯一的子节点，则不会有变化。最终前部分的结构正确。

而pruneBefore在处理后部分时，会删除target之前的li C，然后在父ul中，删除前面的兄弟节点。同样，父li B的ul中，删除前面的li A，然后在div的ul中，删除前面的兄弟节点。可能结构会是：

<div>

<ul>

<li>B

<ul>

<li id="target">D</li>

<li>E</li>

</ul>

</li>

<li>F</li>

</ul>

</div>

这符合预期。

因此，这个方法是可行的。

现在，如何将这个逻辑转化为JavaScript代码，并处理可能的边缘情况？

需要注意的问题：

1. 如何克隆整个文档，包括html、head、body等。

2. 如何处理目标节点在根节点的情况。

3. 处理文本节点和其他类型的节点。

在代码中，cloneTreeWithMap函数会克隆传入的根节点，这里假设是document.documentElement，即html元素。然后递归克隆所有子节点。

pruneAfter和pruneBefore函数通过遍历父节点，删除不需要的兄弟节点。

测试时，需要确保目标节点存在于克隆树中，并且正确找到对应的克隆节点。

现在，编写代码：

function splitDOMAtNode(originalNode) {

// 辅助函数：克隆树并建立映射

function cloneTreeWithMap(root) {

const map = new Map(); // 保存原始节点到克隆节点的映射

function clone(node) {

const cloned = node.cloneNode(false); // 浅克隆，不克隆子节点

map.set(node, cloned);

// 递归克隆子节点

Array.from(node.childNodes).forEach(child => {

cloned.appendChild(clone(child));

});

return cloned;

}

const clonedRoot = clone(root);

return { clonedRoot, map };

}

// 修剪函数：删除目标节点之后的所有兄弟节点

function pruneAfter(clonedNode) {

let current = clonedNode;

while (current.parentNode) {

const parent = current.parentNode;

const siblings = Array.from(parent.childNodes);

const index = siblings.indexOf(current);

// 删除当前节点之后的所有兄弟节点

for (let i = siblings.length - 1; i > index; i--) {

parent.removeChild(siblings[i]);

}

current = parent; // 向上处理父节点

}

}

// 修剪函数：删除目标节点之前的所有兄弟节点

function pruneBefore(clonedNode) {

let current = clonedNode;

while (current.parentNode) {

const parent = current.parentNode;

const siblings = Array.from(parent.childNodes);

const index = siblings.indexOf(current);

// 删除当前节点之前的所有兄弟节点

for (let i = 0; i < index; i++) {

parent.removeChild(siblings[i]);

}

current = parent; // 向上处理父节点

}

}

// 获取原始文档的根节点

const root = originalNode.ownerDocument.documentElement;

// 克隆并处理前部分

const { clonedRoot: frontRoot, map: frontMap } = cloneTreeWithMap(root);

const frontClonedNode = frontMap.get(originalNode);

if (!frontClonedNode) {

throw new Error('Target node not found in cloned tree');

}

pruneAfter(frontClonedNode);

// 克隆并处理后部分

const { clonedRoot: backRoot, map: backMap } = cloneTreeWithMap(root);

const backClonedNode = backMap.get(originalNode);

if (!backClonedNode) {

throw new Error('Target node not found in cloned tree');

}

pruneBefore(backClonedNode);

return {

front: frontRoot,

back: backRoot

};

}

这个函数返回包含前部分和后部分克隆根节点的对象。用户可以通过outerHTML属性获取它们的HTML字符串，或者进一步操作。

例如：

const target = document.getElementById('target');

const { front, back } = splitDOMAtNode(target);

console.log(front.outerHTML); // 前部分的HTML

console.log(back.outerHTML); // 后部分的HTML

需要注意，这种方法会克隆整个文档，包括head和body，这在某些情况下可能不是用户需要的。用户可能希望只处理某个子树，而不是整个文档。因此，可能需要修改函数，允许用户指定根节点，默认为document.documentElement。

改进后的函数可以接受一个root参数：

function splitDOMAtNode(originalNode, root = originalNode.ownerDocument.documentElement) {

// ...其余代码同前，使用传入的root作为克隆的根

}

这样用户可以选择分割某个子树，而不是整个文档。

另外，需要考虑原始Node是否在传入的root子树中，否则会导致映射失败。

但为了简化，假设用户传入的originalNode在root子树中。

综上所述，最终的代码应该能够处理大部分情况，生成正确分割的两个DOM树。
```

:::

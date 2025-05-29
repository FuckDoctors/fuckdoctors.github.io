---
url: 'https://zhaobc.site/notes/backend/java/code-snippets/mockito.md'
---
# Mockito 相关代码片段

## 参数验证

JUnit 测试时，对应 Mocked 方法，我们可以返回自己想要的返回值或异常，但是有时希望验证一下，我们调用时传的参数是否正确。

此时，可以使用 ArgumentCaptor 来收集参数，进而做验证。

示例：

```java
ArgumentCaptor<TestIn> argCaptor = ArgumentCaptor.forClass(TestIn.class);
// 调用 （注意，这里指定了类型，不指定的话有些时候不能正确执行，比如， dao.find(any()) 就不知实际该匹配哪个，可能返回 null）
testService.doMethod(any(TestIn.class)).thenReturn(1);
// 参数收集
verify(testService).doMethod(argCaptor.captor());
// 参数校验
assertEquals("0", argCaptor.getValue().getInArg());
```

多次调用时的验证：

```java
ArgumentCaptor<TestIn> argCaptor = ArgumentCaptor.forClass(TestIn.class);

// 参数收集
verify(testService, times(2)).doMethod(argCaptor.captor());
List<TestIn> inValues = argCaptor.getAllValues();

// 参数校验
// 第一次调用的参数验证
assertEquals("0", inValues.get(0).getInArg());
// 第二次调用的参数验证
assertEquals("1", inValues.get(1).getInArg());
```

## 编程式返回期待值

```java
when(testService.doMethod(any())).thenAnswer(inv -> {
  TestIn in = inv.getArgument(0, TestIn.class);
  TestOut out = new TestOut();

  out.setA(in.getA());
  if ("".equals(in.getB())) {
    out.setOb("1");
  }

  return out;
});

when(testService.doMethod2(eq("1"), any())).thenReturn("0");
```

## 参数为对象时，返回 null （无法正确匹配）

当参数为对象类型时，为了能区分不太的参数，返回不同的内容，需要自定义参数匹配来实现。
单纯的用 `any(InParam.class)` 是无法实现的。

自定义参数匹配示例：

```java
public class MessageMatcher implements ArgumentMatcher<Message> {

    private Message left;

    // constructors

    @Override
    public boolean matches(Message right) {
        return left.getFrom().equals(right.getFrom()) &&
          left.getTo().equals(right.getTo()) &&
          left.getText().equals(right.getText()) &&
          right.getDate() != null &&
          right.getId() != null;
    }
}
```

使用：

```java
// 业务代码
MessageDTO messageDTO = new MessageDTO();
messageDTO.setFrom("me");
messageDTO.setTo("you");
messageDTO.setText("Hello, you!");

messageController.createMessage(messageDTO);

// JUnit 代码
Message message = new Message();
message.setFrom("me");
message.setTo("you");
message.setText("Hello, you!");

verify(messageService, times(1)).deliverMessage(argThat(new MessageMatcher(message)));
```

关于自定义参数匹配，可以参考这篇文章: [Mockito ArgumentMatchers](https://www.baeldung.com/mockito-argument-matchers)。

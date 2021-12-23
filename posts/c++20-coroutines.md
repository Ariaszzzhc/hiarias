---
title: "C++20 Coroutine 初探"
date: 2020-05-12 16:49:23
tags: C++ 协程
description: "C++20标准早已确定。时至今日，各大编译器也已经支持了Coroutine，是时候体验下C++的协程了! "
---

C++20 的协程带来全新的3个关键字 `co_yield`, `co_await`, `co_return` 已经全新的头文件 `<coroutine>`
由于C++20的正式标准还没有发布, 目前 coroutine 相关的类都在 `std::experimental` 命名空间中



## 第一个协程
根据C++20中的标准,  任何带有关键字 `co_await` 的函数将被视为协程, 同时 `co_await` 只能用于协程上下文

所以我们可以这样子写
```c++
#include <iostream>
#include <experimental/coroutine>

using namespace std;
using namespace std::experimental;

void coro() {
  co_await suspend_always{};
  cout << "world" << endl;
}

int main() {
  coro();
  cout << "Hello, ";
}
```

但是这个代码其实是无法编译的, 一编译就会有如下报错: 

```
error: this function cannot be a coroutine: 'std::experimental::coroutines_v1::coroutine_traits<void>' has no member named 'promise_type'
```

根据报错的信息来看, 如果一个函数要成为协程, 那么函数的返回值的类型也是有要求的.



## 实现符合编译器要求的类型

根据编译器的要求，我们协程的返回类型需要有个 `promise_type` 成员，同时该成员需要实现以下几个方法

* `auto initial_suspend()`
* `auto final_suspend()`
* `auto get_return_object()`
* `void return_void()`
* `void unhandled_exception()`

其中有几个方法理解起来比较简单，我们这个协程没有返回值因此需要 `return_void()` 方法, 而 `unhandled_exception()` 方法则是处理当协程遇到异常的时候会执行的代码.

`get_return_object()` 则是当协程第一次挂起时, 将自己的返回值作为协程体的返回值返回给协程的调用者。

剩下的`initial_suspend()` 以及 `final_suspend()`方法则是用来自定义协程的一些操作（以后会讲到）



### coroutine_handle<>

在实现我们协程之前，首先要聊一下包含于 `<coroutine>` 头中的 `coroutine_handle<>` 类型

根据C++20的标准我们可以知道, C++的协程采用无栈式协程的实现. 这就意味着编译器会帮我们实现一些魔法, 协程挂起时通过魔法(闭包)将变量保存起来, 同时给予开发者一个对象用于控制协程的恢复、销毁. 

这个对象就是 `coroutine_handle<>`



### 实现 `resumable` 类型

```c++
class resumable {
 public:
  struct promise_type;
  using handle = coroutine_handle<promise_type>;

  struct promise_type {
    using handle = coroutine_handle<promise_type>;

    auto initial_suspend() { return suspend_always{}; }
    auto final_suspend() { return suspend_always{}; }
    
    auto get_return_object() {
      return handle::from_promise(*this);
    }
    
    void return_void() {}
    void unhandled_exception() {
      std::terminate();
    }
  };

  resumable(handle h) : handle_(h) {}
  resumable(resumable&) = delete;
  resumable(resumable&&) = delete;
  ~resumable() {
    handle_.destroy();
  }

  bool resume() {
    if (not handle_.done())
      handle_.resume();
    return not handle_.done();
  }

 private:
  handle handle_;
};
```

除了编译器要求的实现以外, 我们给 `resumable` 类型添加了一个`bool resume()` 方法. 利用这个方法我们可以控制协程的恢复.



### 运行协程

实现所需要的类型之后, 我们也要把之前的代码修改下: 

```c++
#include <iostream>
#include <experimental/coroutine>

using namespace std;
using namespace std::experimental;

/** class resumable {
...
} **/

resumable coro() {
  co_await suspend_always{};
  cout << "world" << endl;
}

int main() {
  auto r = coro();
  cout << "Hello, ";
  while(r.resume());
}
```

接下来就是令人激动的时刻了, 我们运行这段代码.  Just do it!

![](/images/c++20-coroutines-1.png)

大功告成！

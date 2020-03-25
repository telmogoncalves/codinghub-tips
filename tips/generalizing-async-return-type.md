---
title: "Generalizing async return type"
language: "c#"
twitter: "avishekp86"
---

// The ValueTask type can be returned from an async method, and if that method completes 
// synchronously and successfully, nothing need be allocated, smart way to use memory allocation.

public async ValueTask<int> Func()
{
    int someInteger = 100;
    await Task.Delay(100);
    return someInteger;
}
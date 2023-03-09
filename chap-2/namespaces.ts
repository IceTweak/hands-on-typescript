namespace A {
    class FirstClass {}
}

namespace B {
    class SecondClass {}
    // Not reachable from another namespace
    const test = new FirstClass();
}
var a: string | null = null;
console.log("a =", a);
console.log("typeof a =", typeof a);

var b: string | undefined;
console.log("b =", b);
console.log("typeof b =", typeof b);

var c: string | undefined = undefined;
console.log("c =", c);
console.log("typeof c =", typeof c);

var d: string | null = "jitu";
console.log("d =", d);
console.log("typeof d =", typeof d);

console.log("null == undefined ->", null == undefined);
console.log("null === undefined ->", null === undefined);

var arr: string[] = [];
console.log("arr[0] =", arr[0]);
console.log("typeof arr[0] =", typeof arr[0]);

var obj: { key?: string } = {};
console.log("obj.key =", obj.key);
console.log("typeof obj.key =", typeof obj.key);

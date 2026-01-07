export declare class Student {
    login(userName: string, password: string): "Logged in.." | "Login Failed";
    result(marks: number): string;
}
export declare class Teacher extends Student {
    subject(subject: string): string;
}
//# sourceMappingURL=app.d.ts.map
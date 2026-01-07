// app.ts
export class Student {
    login(userName, password) {
        return userName && password ? "Logged in.." : "Login Failed";
    }
    result(marks) {
        return marks ? "Passed:" + marks : "Failed!, try again";
    }
}
export class Teacher extends Student {
    subject(subject) {
        return subject
            ? "He/She teaches the Subject:" + subject
            : "Error! Wrong subject type given...";
    }
}
//# sourceMappingURL=app.js.map
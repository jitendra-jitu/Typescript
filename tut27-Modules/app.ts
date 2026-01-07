// app.ts
export class Student {
  login(userName: string, password: string) {
    return userName && password ? "Logged in.." : "Login Failed";
  }

  result(marks: number) {
    return marks ? "Passed:" + marks : "Failed!, try again";
  }
}

export class Teacher extends Student {
  subject(subject: string) {
    return subject
      ? "He/She teaches the Subject:" + subject
      : "Error! Wrong subject type given...";
  }
}

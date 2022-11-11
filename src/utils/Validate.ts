export class Validate {
  static lengthIsCorrect(txt: string, size: number[]) {
    if (txt.length < size[0] || txt.length > size[1]) {
      return false;
    }
    return true;
  }
  static notContainWhiteSpace(txt: string) {
    if (txt.indexOf(" ") > 0) {
      return false;
    }
    return true;
  }

  static areEquals(list: string[]) {
    var status = true;
    let first = list[0];
    list.forEach((txt) => {
      if (first !== txt) {
        status = false;
      }
    });

    return status;
  }
  static isEmail(email: string) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }
}

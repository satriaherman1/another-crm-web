class FormatService {
  truncate(value: string, len: number) {
    if (value.length <= len) {
      return value;
    }

    value = value.slice(0, len) + "...";
    return value;
  }

  generateInitialName(fullName: string) {
    const arrFullName = fullName.split(" ");
    let initial: string = "";
    arrFullName.map((fn) => {
      initial !== undefined ? (initial += fn.charAt(0)) : (initial = fn.charAt(0));
    });

    return initial;
  }
}

export default FormatService;

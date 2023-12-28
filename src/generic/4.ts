/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

type Props = {};

class Component<T extends Props> {
  constructor(public props: T) {}
}

class Page extends Component<{ title: string }> {
  pageInfo() {
    console.log(this.props.title);
  }
}

const pageInstance = new Page({ title: "My page" });
pageInstance.pageInfo();

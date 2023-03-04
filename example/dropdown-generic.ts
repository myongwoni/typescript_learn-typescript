interface DropdownItem<T> {
  value: T;
  selected: boolean;
}

const emailsGeneric: DropdownItem<string>[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

const numberOfProductsGeneric: DropdownItem<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

function createDropdownItemGeneric(item: DropdownItem<string> | DropdownItem<number>) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

function createDropdownItemGenericAll<T>(item: DropdownItem<T>) {
  const option = document.createElement('option');
  if (typeof item.value === 'string') {
    option.value = item.value.toString();
    option.innerText = item.value.toString();
  }
  option.selected = item.selected;
  return option;
}

emailsGeneric.forEach(function (email) {
  const item = createDropdownItemGeneric(email);
  const item2 = createDropdownItemGenericAll<string>(email);
  const selectTag = document.querySelector('#email-dropdown');
  if (selectTag !== null) selectTag.appendChild(item);
});

interface Email {
  value: string,
  selected: boolean
};

const emails: Email[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

interface Product {
  value: number,
  selected: boolean
};

const numberOfProducts: Product[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

interface TrueFalse {
  value: boolean,
  selected: boolean
};

function createDropdownItem(item: Email | Product) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem(email);
  const selectTag = document.querySelector('#email-dropdown');
  if (selectTag !== null) selectTag.appendChild(item);
});

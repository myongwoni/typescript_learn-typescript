// Partial - 특정 타입의 부분 집합을 만족하는 타입을 정의
interface Address {
  email: string;
  address: string;
}

type MayHaveEmail = Partial<Address>;
const me: MayHaveEmail = {};
const you: MayHaveEmail = { email: 'test@abc.com' };
const all: MayHaveEmail = { email: 'temp@xyz.net', address: 'yatap' };


// Pick - 특정 타입에서 몇 개의 속성을 선택하여 타입을 정의
interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

function fetchProduct(): Promise<Product[]> {
  // ...
}


// 직접 선언
// 위에 선언한 Product interface를 사용하지 못함
function displayProductDetailDirect(shoppingItem: {
  id: number; name: string; price: number; 
}) {

}

// 새로 선언
// 중복코드가 많이 발생함
// 1, 상품 목록을 받아오기 위한 API 함수
interface ProductDetail {
  id: number;
  name: string;
  price: number;
}

function displayProductDetailNew(shoppingItem: ProductDetail) {

}

// 유틸리티 타입(Pick) 사용
// 재사용 가능
// 2. 특정 상품의 상세 정보를 나타내기 위한 함수
type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>;
function displayProductDetailPick(shoppingItem: Pick<Product, 'id' | 'name' | 'price'>) {
  
}

// interface updateProduct {
//   id?: number;
//   name?: string;
//   price?: number;
//   brand?: string;
//   stock?: number;
// }

type updateProduct = Partial<Product>;

// 3. 특정 상품 정보를 업데이트(갱신)하는 함수
function updateProductItem(productItem: Partial<Product>) {

}

// 4. 유틸리티 타입 구현하기 - Partial
interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}

// interface UserProfileUpdate {
//   username?: string;
//   email?: string;
//   profilePhotoUrl?: string;
// }

// #1
type UserProfileUpdate = {
  username?: UserProfile['username'];
  email?: UserProfile['email'];
  profilePhotoUrl?: UserProfile['profilePhotoUrl'];
}

// #2 (mapped type)
type UserProfileUpdateMapped = {
  [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p];
}
type UserProfileKeys = keyof UserProfile;

// #3
type UserProfileUpdateKeys = {
  [p in keyof UserProfile]?: UserProfile[p];
}

type UserProfileGeneric<T> = {
  [p in keyof T]?: T[p];
}
  
  
// Omit - 특정 타입에서 지정된 속성만 제거한 타입을 정의
interface AddressBook {
  name: string;
  phone: number;
  address: string;
  company: string;
}

const phoneBook: Omit<AddressBook, 'address'> = {
  name: 'kildong',
  phone: 25111876,
  company: '백수',
}
const chingtao: Omit<AddressBook, 'address' | 'company'> = {
  name: '양꼬치',
  phone: 310538349,
}

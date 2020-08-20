// export type ItemWithoutSubItems = ItemBase & {
//   // this is necessary only to make the compiler happy :(
//   items?: undefined;
// };

// export type ItemWithSubItems = ItemBase & {
//   items: Array<ItemWithoutSubItems>;
//   hideGroupLabel?: boolean;
// };

export type Item = {
  id: string;
  value: any;
  label:
    | (({inputValue}: {inputValue: string}) => React.ReactElement)
    | React.ReactElement;
  searchKey?: string;
  items?: Array<Omit<Item, 'items'>>;
};

export type ItemSize = 'zero' | 'small';

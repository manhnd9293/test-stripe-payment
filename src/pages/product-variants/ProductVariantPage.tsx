import {v4 as idv4} from 'uuid';
import {useState} from "react";
type Option = {
  id: string
  name: string;
  values: OptionValue[];
}

type OptionValue = {
  id: string;
  name: string;
  optionId: string;
}

type Product = {
  attributes: {[optionId: string]: string}
}

const sizeId = idv4();
const colorId = idv4();

const sizeOption: Option = {
  id: sizeId,
  name: 'size',
  values: [
    {
      id: idv4(),
      name: 's',
      optionId: sizeId
    },
    {
      id: idv4(),
      name: 'm',
      optionId: sizeId
    },
    {
      id: idv4(),
      name: 'l',
      optionId: sizeId
    }
  ]
}

const colorOption: Option = {
  id: colorId,
  name: 'color',
  values: [
    {
      id: idv4(),
      name: 'red',
      optionId: colorId
    },
    {
      id: idv4(),
      name: 'white',
      optionId: colorId
    },
    {
      id: idv4(),
      name: 'blue',
      optionId: colorId
    }
  ]
}

const options = [sizeOption, colorOption];
type ProdAttributes = { [id: string]: string; optionName: string; optionValue: string };

const initialValue: ProdAttributes [] = [];

const productVariants = options.reduce((result, option)=> {
  const {id, values} = option;
  const newResult = [];
  for(const item of result) {
    for(const value of values) {
      newResult.push({...item, [id]: value.id})
    }
  }

  return newResult;
}, initialValue)

type GroupVariantView = {
  id: string;
  name: string;

}

function getGroupView(groupId: string) {

}

function ProductVariantPage() {

  const [groupId, setGroupId] = useState<string>(sizeId);

  return (
    <div className={'w-[500px] mx-auto'}>
      <div className={'mt-3 font-bold'}>Product variants</div>
    </div>
  );
}

export default ProductVariantPage;
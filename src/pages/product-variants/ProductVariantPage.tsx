import { v4 as idv4 } from 'uuid';
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.tsx';

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


const sizeId = idv4();
const colorId = idv4();

const sizeOptions: Option = {
  id: sizeId,
  name: 'size',
  values: [
    {
      id: idv4(),
      name: 'S',
      optionId: sizeId
    },
    {
      id: idv4(),
      name: 'M',
      optionId: sizeId
    },
    {
      id: idv4(),
      name: 'L',
      optionId: sizeId
    }
  ]
}

const colorOptions: Option = {
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

const countryOptionId = idv4();

const countryOptions: Option = {
  id: countryOptionId,
  name: 'country',
  values: [
    {
      id: idv4(),
      name: 'vn',
      optionId: countryOptionId
    },
    {
      id: idv4(),
      name: 'cn',
      optionId: countryOptionId
    }
  ]
}

const options = [sizeOptions, colorOptions, countryOptions];


type ProductVariant = {
  specs: SpecFull[]
}


type SpecFull = {
  optionId: string;
  optionValueId: string;
  optionName: string;
  optionValueName: string;
}


// const productVariants: ProductVariant[] = options.reduce((result, option) => {
//   const {id, values} = option;
//   const newResult = [];
//   for(const item of result) {
//     for(const value of values) {
//       const spec: SpecFull = {
//         optionId: id,
//         optionValueId: value.id,
//         optionName: option.name,
//         optionValueName: value.name
//       }
//       newResult.push([...structuredClone(item), spec]);
//     }
//   }
//
//   return newResult;
// }, [[]] as SpecFull[][]).map(item => ({specs: item}));





function getGroupVariantByOptionId(groupId: string) : GroupVariantByOption[] {
  const filteredGroupSpecVariants: ProductVariant[] = options.filter(o => o.id !== sizeId).reduce((result, option) => {
    const {id, values} = option;
    const newResult = [];
    for(const item of result) {
      for(const value of values) {
        const spec: SpecFull = {
          optionId: id,
          optionValueId: value.id,
          optionName: option.name,
          optionValueName: value.name
        }
        newResult.push([...structuredClone(item), spec]);
      }
    }

    return newResult;
  }, [[]] as SpecFull[][]).map(item => ({specs: item}));
  const groupOption = options.find(o => o.id === groupId);
  return groupOption!.values.map(value => {
    return {
      optionId: groupId,
      optionName: groupOption!.name,
      valueId: value.id,
      valueName: value.name,
      variants: filteredGroupSpecVariants.map(variant => ({price: 0, quantity: 0, specs: variant.specs}))
    }
  })
}


type GroupVariantByOption = {
  optionId: string;
  optionName: string;
  valueId: string;
  valueName: string;
  variants: VariantGroupFormat[]
}

type VariantGroupFormat = {
  price: number,
  quantity: number,
  specs: SpecFull[]
}


function ProductVariantPage() {

  const [groupId, setGroupId] = useState<string>(sizeId);
  const groupOption: GroupVariantByOption[] = getGroupVariantByOptionId(groupId);

  return (
    <div className={'w-[500px] mx-auto'}>
      <div className={'mt-3 font-bold'}>Product variants</div>
      <Select value={groupId} onValueChange={v => setGroupId(v)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="G" />
        </SelectTrigger>
        <SelectContent>
          {
            options.map(option => {
              return (
                <SelectItem key={option.id} value={option.id}>{option.name}</SelectItem>
              )
            })
          }
        </SelectContent>
      </Select>
      <div className={'mt-4'}>
        {
          groupOption.map(option => {
            return (
              <div key={`${option.valueId}`}>
                <div>{option.valueName}</div>
                <ul className={'list-disc ml-8'}>
                  {
                    option.variants.map(variant => {
                      const joinValue = variant.specs.map(s => s.optionValueName).join('-');
                      return (
                        <li key={joinValue}>{joinValue}</li>
                      )
                    })
                  }
                </ul>
              </div>
            )
          })
        }

      </div>
    </div>
  );
}

export default ProductVariantPage;

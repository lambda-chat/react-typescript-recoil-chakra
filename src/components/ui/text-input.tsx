import React from 'react';
import { useRecoilState } from 'recoil';
import textState from '../../atoms/test-state';

type TextInputOnChangeEvent = {
  target: {
    value: string;
  };
};

export default function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event: TextInputOnChangeEvent) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}

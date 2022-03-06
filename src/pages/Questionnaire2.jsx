import React from 'react';
import { Select,Progress,Form,Button, Collapse } from 'antd';



const { Panel } = Collapse;
const { Option } = Select;

const text1 = `
A cough, also known as tussis, is a voluntary or involuntary act that clears the throat and breathing passage of foreign particles, microbes, irritants, fluids, and mucus; it is a rapid expulsion of air from the lungs. Coughing can be done deliberately or as part of a reflex.
`;
const text2 = `
A stuffy or congested nose occurs when the tissues lining it become swollen. The swelling is due to inflamed blood vessels. The problem may also include nasal discharge or "runny nose." If excess mucus runs down the back of your throat (postnasal drip), it may cause a cough or sore throat
`;
const text3 = `
A fever is a temporary increase in your body temperature, often due to an illness. Having a fever is a sign that something out of the ordinary is going on in your body.

\nFor an adult, a fever may be uncomfortable, but usually isn't a cause for concern unless it reaches 103 F (39.4 C) or higher. For infants and toddlers, a slightly elevated temperature may indicate a serious infection.
`;


function handleChange(value) {
  console.log(`Selected: ${value}`);
}

export default function SelectSizesDemo() {

  return (
    <>
    <br />
    <Progress percent={40} status="active" />
    <br />
    <br />
      <Form.Item label="">
        <span className="ant-form-text">Please select any symptoms you might be experiencing</span>
      </Form.Item>
      <Select
    mode="multiple"
    style={{ width: '100%' }}
    placeholder="Select any symptoms you might be experiencing"
    defaultValue={['Cough','Runny or Stuffy Nose', 'Fever']}
    onChange={handleChange}
    optionLabelProp="label"
  >
    <Option value="Body Aches" label="Body Aches">
      <div className="demo-option-label-item">
        Body Aches
      </div>
    </Option>
    <Option value="Sneezing" label="Sneezing">
      <div className="demo-option-label-item">
        Sneezing
      </div>
    </Option>
    <Option value="Cough" label="Cough">
      <div className="demo-option-label-item">
        Cough
      </div>
    </Option>
    <Option value="Runny or Stuffy Nose" label="Runny or Stuffy Nose">
      <div className="demo-option-label-item">
        Runny or Stuffy Nose
      </div>
    </Option>
    <Option value="Congestion" label="Congestion">
      <div className="demo-option-label-item">
        Congestion
      </div>
    </Option>
    <Option value="Fever" label="Fever">
      <div className="demo-option-label-item">
        Fever
      </div>
    </Option>
    <Option value="Sore Throat" label="Sore Throat">
      <div className="demo-option-label-item">
        Sore Throat
      </div>
    </Option>
    <Option value="Headache" label="Headache">
      <div className="demo-option-label-item">
        Headache
      </div>
    </Option>
    <Option value="Cold" label="Cold">
      <div className="demo-option-label-item">
        Cold
      </div>
    </Option>

  </Select>
  <br />
    <Collapse accordion>
      <Panel header="Cough" key="1">
        <p>{text1}</p>
      </Panel>
      <Panel header="Runny or Stuffy Nose" key="2">
        <p>{text2}</p>
      </Panel>
      <Panel header="Fever" key="3">
        <p>{text3}</p>
      </Panel>
    </Collapse>

    <Button type="primary" htmlType="submit" href="/results">
          Next
        </Button>
    </>
  );
};


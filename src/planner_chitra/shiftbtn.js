import { Switch } from "antd";

function ToggleButton() {
  return(
    <div>
      <label>Shift</label>
      <Switch 
        defaultChedked={false}
        checkedChildren="Day"
        unCheckedChildren="Night"
    />
    </div>
    
  );
}
export default ToggleButton;
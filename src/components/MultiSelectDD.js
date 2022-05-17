import React from "react";
import Multiselect from "multiselect-react-dropdown";

const MultiSelectDD = ({ options, selectedValue, onSelect, onRemove }) => {
  return (
    <>
      <div>
        <Multiselect
          options={options} // Options to display in the dropdown
          selectedValues={selectedValue} // Preselected value to persist in dropdown
          onSelect={onSelect} // Function will trigger on select event
          onRemove={onRemove} // Function will trigger on remove event
          displayValue="name"
          showCheckbox={true} // Property name to display in the dropdown options
        />
      </div>
    </>
  );
};

export default MultiSelectDD;

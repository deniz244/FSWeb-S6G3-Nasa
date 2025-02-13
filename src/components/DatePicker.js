import React from "react";

export default function DatePicker(props) {
  const { setDate } = props;
  const dateHandler = (e) => {
    console.log(e.target.value);
    setDate(e.target.value);
  };

  return (
    <div>
      Lütfen görüntülemek istediğiniz tarihi seçin{" "}
      <input type="date" id="date" name="date" onChange={dateHandler} />
    </div>
  );
}

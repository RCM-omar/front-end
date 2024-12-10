import { Formik } from "formik";
import SelectField from "../../Components/Forms/Inputs/SelectField";
import CustomInput from "../../Components/Forms/Inputs/CustomInput";
import { Button } from "@mui/material";
import CustomDialog from "../../Components/CustomDialog/CustomDialog";
import { useState } from "react";

export default function Home() {
  
  const [open , setOpen] =  useState(false)
  return <Formik
    initialValues={{ name: "ahmed", gender: "male" }}
    onSubmit={(v) => console.log(v)}
  >
    {({ handleSubmit }) => {
      return <form onSubmit={handleSubmit}>

        {/* <SelectField label="name" options={["ahmed", "mahmoud"]} name="name" /> */}
        <CustomInput name="gender" label="gender" type="radio" options={["male", "female"]} />
        <CustomInput handleIconClick={() => setOpen(true)
        } type="text" withIcon={true} name="name" icon="hi" label="name"></CustomInput>

        <CustomDialog onClose={()=> setOpen(!open) } children={<>hiiii</>} open={open} />
        <Button type="submit">ok</Button>
      </form>
    }}
  </Formik >;
}

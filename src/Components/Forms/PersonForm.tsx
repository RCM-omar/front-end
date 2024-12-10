import * as Yup from "yup";
import CustomForm, { FieldConfig } from "./CustomForm";
import { useAxios } from "../../Hooks/useAxios";
import { personAxios } from "../../Utils/api";

const fields: FieldConfig[] = [
  { label: "Num", name: "num", type: "text", widthPercentage: "48%" },
  { label: "Code", name: "code", type: "text", widthPercentage: "48%" },
];

const dialogFormSchema = Yup.object().shape({
  num: Yup.string().required("Number is required"),
  code: Yup.string().required("Code is required"),
});

interface PersonFormProps {
  setPersons: (d: any) => void,
}
export default function PersonForm({
  setPersons,
}: PersonFormProps) {
  const { request, error, loading } = useAxios(personAxios);
  // Fetch persons data { num: string; code: string }
  const fetchPersons = async (values: Record<string, any>) => {
    const data = await request("get", "/");
    setPersons(data.data);
  };
  return (
    <CustomForm
      fields={fields}
      initialValues={{ num: "", code: "" }}
      onSubmit={fetchPersons}
      loading={loading}
      error={error}
      validationSchema={dialogFormSchema}
      parentSX={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        "& > div": {
          //  backgroundColor : "red"  ,
          height: 80,
          mt: 3,
        },
      }}
    />
  );
}

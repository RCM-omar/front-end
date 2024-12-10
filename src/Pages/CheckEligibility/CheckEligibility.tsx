import { Formik } from "formik";
import { TextField } from "../../Components/Forms/Inputs/TextField";
import * as Yup from "yup";
import { Button, Box, TextField as MuiTextFeild } from "@mui/material";
import { useState, useMemo, useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CustomDialog from "../../Components/CustomDialog/CustomDialog";
import CustomTable from "../../Components/CustomTable/CustomTable";
import useDialog from "../../Hooks/useDialog";
import PersonForm from "../../Components/Forms/PersonForm";
// import { t } from "i18next";
import { useTranslation } from 'react-i18next';

// !!! UPDATE
type Person = {
  id: string;
  title: string;
  price: number;
  description: string;
};

const validationSchema = Yup.object().shape({
  person: Yup.string().required("This field is required"),
});

export default function CheckEligibility() {
  const { t } = useTranslation();
  const formikRef = useRef(null);

  const { activeDialog, openDialog, closeDialog } = useDialog();
  const [persons, setPersons] = useState<Person[] | null>(null);


  const updateFormikField = (field :string , value :string) => {
    if (formikRef.current) {
      formikRef.current.setFieldValue(field, value);
    }
  };

  // Memoized dialog content
  const dialogContent = useMemo(() => {
    if (activeDialog === "Person") {
      return (
        <>
          <PersonForm setPersons={setPersons} />
          {persons && (
            <Box sx={{ mt: 3 }}>
              <CustomTable
                updateFormikField={updateFormikField}
                field={"person"}
                columns={[
                  { field: "title", headerName: t("Title"), width: 200 },
                  { field: "price", headerName: t("Price"), width: 200 },
                  {
                    field: "description",
                    headerName: t("Description"),
                    width: 500,
                  },
                ]}
                initialRows={persons}
              />
            </Box>
          )}
        </>
      );
    }
    if (activeDialog === "anther") {
      return (
        <>
          <PersonForm setPersons={setPersons} />
          {persons && (
            <Box sx={{ mt: 3 }}>
              <CustomTable
                updateFormikField={updateFormikField}
                field={"mm"}
                columns={[
                  { field: "title", headerName: t("Title"), width: 200 },
                  { field: "price", headerName: t("Price"), width: 200 },
                  {
                    field: "description",
                    headerName: t("Description"),
                    width: 500,
                  },
                ]}
                initialRows={persons}
              />
            </Box>
          )}
        </>
      );
    }
    return null;
  }, [activeDialog, persons]);

  return (
    <Box>
      <Formik
        innerRef={formikRef}
        initialValues={{ person: "" , mm : "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log("Main form submitted with:", values)}
      >
        {(formik) => (
          <form style={{display:"flex" , flexDirection : "column"}} onSubmit={formik.handleSubmit}>
            <TextField
              name="person"
              label="MRN or ID"
              withIcon
              widthPercentage="20%"
              icon={<SearchIcon />}
              handleIconClick={() => {
                openDialog("Person");


              }}
            />
            <TextField
              name="mm"
              label="MRN or ID"
              withIcon
              icon={<SearchIcon />}
              handleIconClick={() => {
                openDialog("anther");


              }}
            />

            <Button
              type="submit"
              sx={{
                mt: 2,
              }}
            >
              {t("search")}
            </Button>



             



            {activeDialog && (
              <CustomDialog
                maxWidth="md"
                open={!!activeDialog}
                onClose={closeDialog}
                title={activeDialog}

              >
                {dialogContent}
              </CustomDialog>
            )}
          </form>
        )}
      </Formik>
    </Box>
  );
}

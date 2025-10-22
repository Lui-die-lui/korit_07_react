import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { DataGrid, GridColDef, GridCellParams, GridToolbar } from "@mui/x-data-grid";
import { Snackbar } from "@mui/material";

import { getCars, deleteCar } from "../api/carapi";
import AddCar from "./AddCar";
import EditCar from "./EditCar";


// import { CarResponse } from "../types";
// table 사용 시 필요하지만 DataGrid로 변경 후 불필요하여 주석 처리

function Carlist() {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  /** 자동차 목록 조회 */
  const { data, error, isSuccess } = useQuery({
    queryKey: ["cars"],
    queryFn: getCars,
  });

  /** 자동차 삭제 */
  const { mutate } = useMutation(deleteCar, {
    onSuccess: () => {
      setOpen(true);
      queryClient.invalidateQueries({ queryKey: ["cars"] });
    },
  });

  /** DataGrid 컬럼 정의 */
  const columns: GridColDef[] = [
    { field: "brand", headerName: "Brand", width: 200 },
    { field: "model", headerName: "Model", width: 200 },
    { field: "color", headerName: "Color", width: 200 },
    { field: "registrationNumber", headerName: "Reg.nr", width: 150 },
    { field: "modelYear", headerName: "Model Year", width: 150 },
    { field: "price", headerName: "Price", width: 150 },
    {
      field: "edit",
      headerName: "",
      width: 90,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      //renderCell -> 렌더링할 html 목록
      // EditCar 의 필수 prop = cardata
      renderCell: (params: GridCellParams) => <EditCar cardata={params.row} />,
      // params.row -> DataGrid 의 한 줄 전체 데이터 객체
      // 삭제는 .brand까지 더해서 brand 하나만 출력
    },
    {
      field: "delete",
      headerName: "",
      width: 90,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params: GridCellParams) => (
        <button
          onClick={() => {
            if (
              confirm(
                `${params.row.brand}의 ${params.row.model} 자동차를 삭제하시겠습니까?`
              )
            )
              mutate(params.row._links.self.href);
          }}
        >
          Delete
        </button>
      ),
    },
  ];

  /** 로딩 및 오류 상태 처리 */
  if (!isSuccess) return <span>Loading... 🔮</span>;
  if (error) return <span>자동차들을 불러오는 데 실패했습니다. 😱</span>;

  /** 성공 시 렌더링 */
  return (
    <>
    
      <AddCar />
      <DataGrid
        rows={data}
        columns={columns}
        getRowId={(row) => row._links.self.href}
        // 상단 툴 바 (= csv 다운로드)
        slots={{toolbar: GridToolbar}}     
      />
  

      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
        message="선택한 자동차 정보가 삭제되었습니다⭕"
      />
    </>
  );
}

export default Carlist;

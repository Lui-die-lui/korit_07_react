import { Car } from "./../types";
import axios from "axios";
import { CarResponse } from "../types";
import { CarEntity } from "./../types";

export const getCars = async (): Promise<CarResponse[]> => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/cars`);

  return response.data._embedded.cars;
};

export const deleteCar = async (link: string): Promise<CarResponse> => {
  const response = await axios.delete(link);
  return response.data;
};

export const addCar = async (car: Car): Promise<CarResponse> => {
  //입력값 front Car -> 리턴값 carResponse
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/api/cars`,
    car,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
};

export const updateCar = async ( // 비동기적으로
  // link: string, // 수정할 차량의 개별 리소스 URL(예: "https://api.example.com/api/cars/5")
  // car: Car // 수정할 차량 정보 객체(수정된 데이터)
  carEntity: CarEntity
): Promise<CarResponse> => {
  const response = await axios.put(carEntity.url, carEntity.car, {
    // PUT 요청으로 서버에 수정 데이터 전송 (PUT 요청이기 때문에 전체 내용이 다 들어가야 수정이 이루어짐)
    headers: {
      "Content-type": "application/json", // JSON 형식의 본문을 전송한다는 의미
    },
  });
  return response.data; // 서버가 반환한 수정된 차량 정보 반환
};

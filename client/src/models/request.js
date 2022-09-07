import axios from "axios";

export default async function request() {
  const result = await axios.get("/api/sample");
  return result.data;
}

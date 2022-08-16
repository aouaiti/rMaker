import { Box } from "@mui/system";
import Image from "next/image";

export default function BackGround() {
  return (
    <Box
      style={{
        position: "fixed",
        top: "0%",
        left: "0%",
        zIndex: "-11",
        backgroundAttachment: "fixed",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Image src={"/bg7.jpg"} layout={"fill"} />
    </Box>
  );
}

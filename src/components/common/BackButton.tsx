import {useNavigate} from "react-router";
import {Button} from "@/components/ui/button.tsx";

function BackButton() {
  const navigate = useNavigate();
  return (
    <>
      <Button variant={'outline'} onClick={()=> navigate('/')} >Back</Button>
    </>
  );
}

export default BackButton;
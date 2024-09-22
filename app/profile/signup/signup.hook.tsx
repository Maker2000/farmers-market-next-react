import { CreateUserDto } from "@/app/models/user";
import { useEffect, useState } from "react";

const signupHook = () => {
  const [newUser, setNewUser] = useState<Partial<CreateUserDto>>();
  const [enableAutoComplete, setEnableAutoComplete] = useState(true);
  const handleAutoCompleteToggle = (checked: boolean) => {
    setEnableAutoComplete(checked);
  };
  const setUserName = (username: string) => {
    setNewUser({
      ...newUser,
      userName: username,
    });
  };
  const setPassword = (password: string) => {
    setNewUser({
      ...newUser,
      password: password,
    });
  };
  const setAddress1 = (address1: string) => {
    setNewUser({
      ...newUser,
      address: {
        ...newUser?.address,
        address1: address1,
      },
    });
  };
  return {
    newUser,
    enableAutoComplete,
    handleAutoCompleteToggle,
    setUserName,
    setPassword,
    setAddress1,
  };
};
export default signupHook;

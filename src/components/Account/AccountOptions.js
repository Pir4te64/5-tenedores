import { View, Text } from "react-native";
import React, { useState } from "react";
import { ListItem, Icon } from "react-native-elements";
import { map } from "lodash";
import { Modal } from "../../components/Shared/Modal";
import { ChangeName } from "./ChangedisplayNameForm";
import { ChangeEmailForm } from "./ChangeEmailForm";
import { ChangePassword } from "./ChangePassword/ChangePassword";
export function AccountOptions(props) {
  const { onReload } = props;
  const [showModal, setShowModal] = useState(false);
  const [renderComponent, setRenderComponent] = useState(null);
  const onCloseOpenModal = () => setShowModal((prevState) => !prevState);
  const selectedComponent = (key) => {
    if (key === "displayName") {
      setRenderComponent(
        <ChangeName onReload={onReload} onClose={onCloseOpenModal} />
      );
    }
    if (key === "email") {
      setRenderComponent(
        <ChangeEmailForm onReload={onReload} onClose={onCloseOpenModal} />
      );
    }
    if (key === "contraseña") {
      setRenderComponent(<ChangePassword onClose={onCloseOpenModal} />);
    }
    onCloseOpenModal();
  };
  const menuOptions = getMenuOptions(selectedComponent);
  return (
    <View>
      {map(menuOptions, (menu, index) => (
        <ListItem key={index} bottomDivider onPress={menu.onPress}>
          <Icon
            type={menu.iconType}
            name={menu.iconNameLeft}
            color={menu.iconColorLeft}
          />
          <ListItem.Content>
            <ListItem.Title>{menu.title}</ListItem.Title>
          </ListItem.Content>
          <Icon
            type={menu.iconType}
            name={menu.iconNameRight}
            color={menu.iconColorRight}
          />
        </ListItem>
      ))}
      <Modal show={showModal} close={onCloseOpenModal}>
        {renderComponent}
      </Modal>
    </View>
  );
}

function getMenuOptions(selectedComponent) {
  return [
    {
      title: "Cambiar Nombre y Apellido",
      iconType: "material-community",
      iconNameLeft: "account-circle",
      iconColorLeft: "#ccc",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => selectedComponent("displayName"),
    },
    {
      title: "Cambiar Email",
      iconType: "material-community",
      iconNameLeft: "at",
      iconColorLeft: "#ccc",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => selectedComponent("email"),
    },
    {
      title: "Cambiar contraseña",
      iconType: "material-community",
      iconNameLeft: "lock-reset",
      iconColorLeft: "#ccc",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => selectedComponent("contraseña"),
    },
  ];
}

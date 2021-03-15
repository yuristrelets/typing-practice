import useOperations from "../../hooks/use-operations";
import { Operation } from "../../entities/operation";
import { Dropdown, Menu } from "antd";
import { UserOutlined, DownOutlined } from "@ant-design/icons";
import type { User } from "../../entities/user";

type ActionsProps = {
  user: User;
  currentUser: User;
  onAction: (action: Operation) => void;
};

export default function Actions({ user, currentUser, onAction }: ActionsProps) {
  const operations = useOperations(user, currentUser);
  const menu = (
    <Menu>
      {operations.length ? operations.map((operation: Operation, key: number) => (
        <Menu.Item
          key={key}
          icon={<UserOutlined />}
          onClick={() => onAction(operation)}
        >
          {operation}
        </Menu.Item>
      )) : (
        <Menu.Item disabled>
          No available operations
        </Menu.Item>
      )}
    </Menu>
  );
  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        Action <DownOutlined />
      </a>
    </Dropdown>
  );
}

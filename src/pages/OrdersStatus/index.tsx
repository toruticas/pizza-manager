import { OrdersTable } from './OrdersTable';
import { Summary } from './Summary';
import { useOrders } from './useOrders';

const OrdersStatus = () => {
  const { data } = useOrders();

  return (
    <div>
      <h1>Order Management</h1>
      <p>Manage your orders here and get an overview of status</p>

      <div>
        <Summary
          total={data.summary.total}
          completed={data.summary.completed}
          pending={data.summary.pending}
          canceled={data.summary.canceled}
        />
        <OrdersTable data={data} />
      </div>
    </div>
  );
};

export { OrdersStatus };

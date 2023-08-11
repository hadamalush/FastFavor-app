import Wrapper from "../../common/wrappers/Wrapper";
import WrapperInfoList from "../../common/wrappers/WrapperInfoList";
import classes from "./OrdersList.module.scss";
import { useState } from "react";

const OrderList = ({ orders }) => {
	const [expandedItems, setExpandedItems] = useState({});

	const orderKeys = Object.keys(orders);

	const showDetailHandler = orderKey => {
		setExpandedItems(prevState => ({
			...prevState,
			[orderKey]: !prevState[orderKey],
		}));
	};

	const orderItems = orderKeys.map(orderKey => (
		<li
			className={classes["general-item"]}
			key={orderKey}
			onClick={() => showDetailHandler(orderKey)}>
			<div className={classes["item-list"]}>
				<p className={classes["item-md"]}>{orders[orderKey].firstName}</p>
				<p>{orders[orderKey].lastName}</p>
				<p>{orders[orderKey].category}</p>
				<p className={classes.price}>{orders[orderKey].price}</p>
			</div>
			{expandedItems[orderKey] ? (
				<ul className={classes["detail-items-list"]}>
					<li className={classes["detail-item"]}>
						<p>First Name:</p> {orders[orderKey].firstName}
					</li>

					<li className={classes["detail-item"]}>
						<p>Last Name:</p> {orders[orderKey].lastName}
					</li>

					<li className={classes["detail-item"]}>
						<p>Address:</p> {orders[orderKey].address}
					</li>
					<li className={classes["detail-item"]}>
						<p>Phone:</p>
						{orders[orderKey].phone}
					</li>
					<li className={classes["detail-item"]}>
						<p>E-mail:</p> {orders[orderKey].email}
					</li>
					<li className={classes["detail-item"]}>
						<div className={classes["description-item"]}>
							<p>Service Description:</p> {orders[orderKey].description}
						</div>
					</li>
				</ul>
			) : null}
		</li>
	));

	return (
		<Wrapper className={classes.wrapper}>
			<WrapperInfoList className={classes.orders}>
				<h1 className={classes["title-list"]}>Pending orders</h1>
				<div className={classes["head-list"]}>
					<p className={classes["item-md"]}>First Name</p>
					<p>Last Name</p>
					<p>Services</p>
					<p>Price</p>
				</div>
				<ul className={classes["general-items-list"]}>{orderItems}</ul>
			</WrapperInfoList>
		</Wrapper>
	);
};

export default OrderList;

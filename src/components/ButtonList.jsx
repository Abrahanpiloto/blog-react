import React from "react";

export const ButtonList = ({ categories, filterCategory }) => {
	return (
		<div className="categories">
			{categories.map((category) => (
				<button
					key={category}
					type="button"
					className="btn-category"
					onClick={() => filterCategory(category)}
				>
					{category}
				</button>
			))}
		</div>
	);
};

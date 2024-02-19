import "./App.css";
import { ButtonList } from "./components/ButtonList";
import { ArticleList } from "./components/ArticleList";
import data from "./data/data";
import { useState } from "react";

function App() {
	const allCategories = [
		"All",
		...new Set(data.map((article) => article.category)),
	];

	const [categories, setcategories] = useState(allCategories);
	const [articles, setArticles] = useState(data);

	const filterCategory = (category) => {
		if (category === "All") {
			setArticles(data);
			return;
		}

		const filteredData = data.filter(
			(article) => article.category === category
		);
		console.log(filteredData);
	};

	return (
		<>
			<div className="title">
				<h1>
					Blog con <span>React.</span>
				</h1>
				<img
					className="title"
					src="../public/pnghut_fox.png"
					alt="img principal"
				/>
			</div>

			<ButtonList categories={categories} filterCategory={filterCategory} />
			<ArticleList articles={articles} />
		</>
	);
}

export default App;

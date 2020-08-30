import React, { Fragment, Component } from "react";

import "./Recipes.css";
import { fetchRecipies } from "../../../services/recipieServices";
import { sampleRecipies } from "../../../constants/sampleRecipe";

import { Header } from "../../commons";
import RecipeCard from "./RecipeCard";
import Loader from "../../commons/Loader";
export default class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      filterValue: {
        calorieValue: null,
        mealTypeValue: "",
      },
      pageInfo: { offset: 0, number: 20 },
      searchFor: "",
      hasfilter: false,
      hasMore: true,
      isLoading: false,
    };
  }

  scrollParentRef = null;

  setSearchText = (searchFor) => {
    this.setState(
      {
        searchFor,
        hasfilter: true,
      },
      () => {
        this.fetchRecipes();
      }
    );
  };

  fetchRecipes = async () => {
    let data = null;
    const { recipes, pageInfo, hasfilter, searchFor, filterValue } = this.state;
    // console.log("******  fetching data  ****");
    try {
      if (hasfilter) {
        this.setState({
          pageInfo: {
            ...pageInfo,
            offset: 0,
          },
          isLoading: true,
        });
      }
      data = await fetchRecipies(
        pageInfo,
        searchFor,
        filterValue.calorieValue,
        filterValue.mealTypeValue
      );
      // console.log("*** data after fetched", data, this.state);

      this.setState({
        recipes: hasfilter ? data : [...recipes, ...data],
        pageInfo: {
          ...pageInfo,
          offset:
            pageInfo.offset > 100
              ? pageInfo.offset
              : pageInfo.offset + pageInfo.number,
        },
        hasfilter: false,
        hasMore: !(pageInfo.offset > 100),
        isLoading: false,
      });

      // console.log(data, this.state);
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    // this.fetchRecipes();
    this.setState({
      recipes: sampleRecipies,
    });
  }

  handleChangeCal = (event) => {
    console.log(event.target.value);
    this.setState({
      filterValue: {
        ...this.state.filterValue,
        calorieValue: event.target.value,
      },
    });
    console.log(this.state);
  };

  handleChangeMeal = (event) => {
    console.log(event.target.value);
    this.setState({
      filterValue: {
        ...this.state.filterValue,
        mealTypeValue: event.target.value,
      },
    });
    console.log(this.state);
  };

  searchClickHandler = () => {
    this.setState(
      {
        hasfilter: true,
      },
      () => {
        this.fetchRecipes();
      }
    );
  };

  render() {
    /**
     * fetch garda this.state destructure ma recipe halna na birsine !!!!!!!!!!!!!
     */
    const { calorieValue, mealTypeValue, recipes, isLoading } = this.state;
    // const recipes = sampleRecipies;
    return (
      <Fragment>
        <Header setSearchText={this.setSearchText}></Header>

        <div className="container body__container">
          <div className="row py-3" ref={(r) => (this.scrolParentRef = r)}>
            <aside className="col-md-3 order-1" id="sticky-sidebar">
              <div className="sticky-top">
                {/* <div className="gp_title-head">
                <small>Filter by:</small>
              </div> */}
                <div className="ctg_contntainer ">
                  <div className="ctg-title">Max Calorie</div>
                  <select
                    name="calorie filter"
                    onChange={this.handleChangeCal}
                    value={calorieValue}
                  >
                    <option value="default" defaultValue="true"></option>
                    <option value="200">200 cal max</option>
                    <option value="400">400 cal max</option>
                    <option value="800">800 cal max</option>
                  </select>
                </div>
                <div className="ctg_contntainer">
                  <div className="ctg-title">Meal Types</div>
                  <select
                    name="calorie filter"
                    onChange={this.handleChangeMeal}
                    value={mealTypeValue}
                  >
                    <option value="default" defaultValue="true"></option>
                    <option value="main course">main course</option>
                    <option value="breakfast">breakfast</option>
                    <option value="desert">desert</option>
                    <option value="snack">snack</option>
                    <option value="soup">soup</option>
                  </select>
                </div>

                <div className="btn_container">
                  <button onClick={this.searchClickHandler}> Search </button>
                </div>
              </div>
            </aside>
            {isLoading ? (
              <Loader />
            ) : (
              <Fragment>
                <main className="col-md-9 order-2" id="main">
                  <div className="wrapper">
                    {recipes.map((item) => (
                      <RecipeCard key={item.id} info={item} />
                    ))}
                  </div>
                </main>
              </Fragment>
            )}
          </div>
        </div>
      </Fragment>
    );
  }
}

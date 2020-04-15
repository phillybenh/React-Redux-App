import React, { useEffect } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import {fetchAdvice} from "../Store/Actions/adviceActions";

const RandomAdvice = (props) => {
  return (
    <div>
      <h2>Random Advice</h2>
      <footer>
        <p>
          Thanks to{" "}
          <a href="https://api.adviceslip.com">Advice Slip JSON API</a> for
          supplying the advice.
        </p>
      </footer>
    </div>
  );
};

const mapStateToProps = state => {
    return{
        advice: state.advice.advice,
        isFetching: state.advice.isFetching,
        error: state.advice.error
    }
}

export default connect(mapStateToProps, {})(RandomAdvice);

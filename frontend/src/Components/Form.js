import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";

import { postcomplaint } from "../actions/complaint";
import { connect } from "react-redux";

import axios from "axios";

const Priorities = ["Urgent", "High", "Medium", "Low"];

const styles = {
  root: {
    width: "50%",
    gridGap: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    justifySelf: "center",
    marginLeft: "10%",
    "& .MuiOutlinedInput-root": {
      width: "60%",
    },
    "& .MuiOutlinedInput-multiline": {
      width: "100%",
    },
  },
};

class Form2 extends Component {
  state = {
    Departments: [],
    auth: this.props.auth,
    department: "",
    priority: "",
    title: "",
    complaint: "",
    addcategory: "",
  };
  async componentDidMount() {
    console.log("Component did Mount", this.state);
    // await this.props.dispatch(getdepartment());
    axios
      .get("http://localhost:5000/api/departments", {
        "x-auth-token": localStorage.token,
      })
      .then((res) => {
        console.log("Axios request sent");
        console.log(res.data);
        const deps = res.data.map((dep) => dep.department);
        this.setState({ Departments: deps });
      })
      .catch((err) => {
        console.log(err.respose ?? err);
      });
  }

  addCategory = async (e) => {
    e.preventDefault();
    const xyz = this.state.addcategory;
    console.log("xyz", xyz);
    axios
      .post(
        "http://localhost:5000/api/departments",
        {
          department: xyz,
        },
        {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.token,
        }
      )
      .then((res) => {
        this.setState({ Departments: [...this.state.Departments, res.data] });
      });
  };
  handleOnChange = (e) => {
    this.setState({ addcategory: e.target.value });
  };
  onSubmit = (e, college) => {
    const { department, title, priority, complaint } = this.state;

    e.preventDefault();
    this.props.dispatch(
      postcomplaint({ priority, department, title, complaint, college })
    );
  };
  handleChange = (evt) => {
    console.log(evt.target.value);
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  render() {
    const college = this.state.auth.user.college;
    const { classes } = this.props;

    console.log("DEPARTMENT", this.props.departments);
    // const submitButtonClickHandler = () => {
    //   window.location.href = "http://localhost:3000/dashboard";
    // };
    return (
      <div>
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          // onSubmit={}
        >
          <TextField
            id="outlined-multiline-static"
            label="Title"
            color="secondary"
            onChange={this.handleChange}
            value={this.state.title}
            name="title"
            variant="outlined"
          />
          <TextField
            id="outlined-select"
            select
            label="Department"
            defaultValue="Default Value"
            color="secondary"
            variant="outlined"
            value={this.state.department}
            name="department"
          >
            {this.state.Departments.map((department, index) => {
              return (
                <MenuItem key={index} value={department}>
                  {department}
                </MenuItem>
              );
            })}
          </TextField>

          <TextField
            id="outlined-select"
            select
            label="Priority"
            color={"secondary"}
            defaultValue="Default Value"
            variant="outlined"
            onChange={this.handleChange}
            value={this.state.priority}
            name="priority"
          >
            {Priorities.map((priority) => (
              <MenuItem key={priority} value={priority}>
                {priority}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            onChange={this.handleChange}
            value={this.state.complaint}
            name="complaint"
            rows={4}
            color="secondary"
            variant="outlined"
          />
          <div>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              className={classes.button}
              endIcon={<SendIcon />}
              onClick={(e) => this.onSubmit(e, college)}
            >
              Submit
            </Button>
          </div>
        </form>
        <input onChange={this.handleOnChange} />
        <button onClick={this.addCategory}>submit</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("MAP STATE", state.complaint.departments);
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(
  withStyles(styles, { withTheme: true })(Form2)
);

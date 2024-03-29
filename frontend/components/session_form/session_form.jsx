import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            zip_code: "",
            birthday: ""
        };
        this.demo = {
            email: "doge@test.com",
            password: "password1",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.clearErrors = this.clearErrors.bind(this);

        this.nameEmpty = false;
        this.emailError = false;
        this.emailEmpty = false;
        this.passwordEmpty = false;
        this.zipCodeEmpty = false;
    }

    update(field) {
        return (e) => {
            if (this.emailError == true) { this.emailError = false };
            return (
                this.setState({
                    [field]: e.currentTarget.value
                })
            )
        }
    }

    updateBirthday(field){
        return (e) => this.setState({
            [field]: e.currentTarget.value
        });
    }

    clearErrors(e) {
        this.props.clearErrors()
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.clearErrors();
        if (this.emailValid()) {
            this.emailError = true;
        }
        else if ((this.state.first_name === "") || this.state.last_name === "" ) {
            this.nameEmpty = true;
        }
        else if (this.state.email === "") {
            this.emailEmpty = true;
        }
        else if (this.state.password === "") {
            this.passwordEmpty = true;
        }
        else if (this.state.zip_code === "") {
            this.zipCodeEmpty = true;
        }
        this.props.processForm(this.state);
        this.setState({ state: this.state });
    }

    handleBlur(e) {
        e.preventDefault();
        this.nameEmpty = false;
        this.emailError = false;
        this.emailEmpty = false;
        this.passwordEmpty = false;
        this.zipCodeEmpty = false;
        this.setState( {state: this.state});
    }

    renderErrors() {
    let error = this.props.errors
    if (error.length > 0 && error.slice(-1) instanceof Array) {
        return (
            <p>{this.renderErrors()}</p>
            )
        }
        else if (error.length > 0)
        return (
            <p>{error.slice(-1)}</p>
            )
        }

    emailValid() {
        if (!this.state.email.includes("@") && this.state.email !== "") {
            return `Please include an '@' in the email address. ${this.state.email} is missing an '@'.`
        }
    }
    
    render () {
        if (this.props.formType === "login") {      //login form.
            return (
                <div className="session-form">
                    <div className="session-form-nav">
                        <Link to="/"><img className="gelplogo" src={window.gelpLogoURL} /></Link>
                    </div>
                    <div className="big-errors">
                        {this.props.errors.length > 0 ?
                        <p>{this.props.errors.slice(-1)}</p> : null }
                    </div>
                    
                    <div className="session-form-container">
                        <div className="session-form-box">
                        <form onSubmit={this.handleSubmit}>
                            <p className="session-form-title">Login to Gelp</p>
                            <p className="session-form-title-2">New to Gelp? <Link to="/signup" onClick={this.clearErrors}>Sign Up</Link></p>

                            <input type="text"
                                value={this.state.email}
                                placeholder="Email"
                                onChange={this.update("email")}
                                className="form-input"
                            />

                            <div className="email-errors">
                                {this.emailError ? (
                                    <div className="email-error">
                                        <i className="fas fa-exclamation"></i>{this.emailValid()}
                                        <div className="email-errors-background" onClick={this.handleBlur}></div>
                                    </div>
                                ) : this.emailEmpty ? (
                                    <div className="email-error">
                                        <i className="fas fa-exclamation"></i> Please fill out this field
                                        <div className="email-errors-background" onClick={this.handleBlur}></div>
                                    </div>
                                ) : null}
                            </div> 
                                
                            <input type="password"
                                value={this.state.password}
                                placeholder="Password"
                                onChange={this.update("password")}
                                className="form-input"
                            />
                            <div className="email-errors">
                                {this.passwordEmpty ? (
                                    <div className="email-error">
                                            <i className="fas fa-exclamation"></i> Please fill out this field
                                        <div className="email-errors-background" onClick={this.handleBlur}></div>
                                    </div>
                                ) :null}
                            </div> 

                            <input className="submit" type="submit" value="Log In"/>

                        </form>

                        <button className="submit" onClick={() => this.props.processForm(this.demo)}>Demo Login</button>
                                <p className="session-form-foot">New to Gelp? <Link to="/signup" onClick={this.clearErrors}>Sign Up</Link></p>
                        </div>


                        <img className="illustration" src={window.illustrationURL} />

                    </div>
                    <footer>
                        <div className="mylinks">
                            <p className="about-user-title">About</p>
                            <a href="https://www.linkedin.com/in/dennis-lum-12526b7a/" target="_blank">Linkedin</a>
                            <a href="https://github.com/dlum904" target="_blank"> Git Hub</a>
                            <a href="https://angel.co/u/dennis-lum" target="_blank"> Angel List</a>
                            <a href="https://dlum904.github.io/dlum/" target="_blank"> About Me</a>
                        </div>
                        <img src={window.footerURL} alt="" />
                    </footer>
                </div>
            )
        }
        else {                           //sign up form
            return (
                <div className="session-form">
                    <div className="session-form-nav">
                        <Link to="/"><img className="gelplogo" src={window.gelpLogoURL} /></Link>
                    </div>
                    <div className="big-errors">
                        {this.props.errors.length > 0 ?
                            <p>{this.props.errors[0].slice(1, -1).split(",")[0].slice(1, -1)}</p> : null}
                    </div>
                <div className="session-form-container">
                    <form onSubmit={this.handleSubmit} className="session-form-box">
                        <p className="session-form-title">Sign up for Gelp</p>
                        <p className="session-form-title-2">Connect with great local businesses</p>
                        <div className="name-input">
                            <input
                                type="text"
                                value={this.state.first_name}
                                placeholder="First Name"
                                onChange={this.update("first_name")}
                            />
                            <input
                                type="text"
                                value={this.state.last_name}
                                placeholder="Last Name"
                                onChange={this.update("last_name")}
                            />
                            <div className="email-errors">
                                {this.nameEmpty ? (
                                    <div className="email-error">
                                        <i className="fas fa-exclamation"></i> Please fill in your First and Last Name
                                        <div className="email-errors-background" onClick={this.handleBlur}></div>
                                    </div>
                                ) : null}
                            </div> 
                        </div>
                        <input type="text"
                            value={this.state.email}
                            placeholder="Email"
                            onChange={this.update("email")}
                            className="form-input"
                        />
                            <div className="email-errors">
                                {this.emailError ? (
                                    <div className="email-error">
                                        <i className="fas fa-exclamation"></i>{this.emailValid()}
                                        <div className="email-errors-background" onClick={this.handleBlur}></div>
                                    </div>
                                ) : this.emailEmpty ? (
                                    <div className="email-error">
                                        <i className="fas fa-exclamation"></i> Please fill out this field
                                        <div className="email-errors-background" onClick={this.handleBlur}></div>
                                    </div>
                                ) : null}
                            </div> 

                        <input type="password"
                            value={this.state.password}
                            placeholder="Password"
                            onChange={this.update("password")}
                            className="form-input"
                        />
                        <div className="email-errors">
                            {this.passwordEmpty ? (
                                <div className="email-error">
                                    <i className="fas fa-exclamation"></i> Please fill out this field
                                    <div className="email-errors-background" onClick={this.handleBlur}></div>
                                </div>
                            ) : null}
                        </div> 

                        <input type="text"
                            value={this.state.zip_code}
                            placeholder="ZIP CODE"
                            onChange={this.update("zip_code")}
                            className="form-input"
                        />
                        <div className="email-errors">
                            {this.zipCodeEmpty ? (
                                <div className="email-error">
                                    <i className="fas fa-exclamation"></i> Please fill out this field
                                    <div className="email-errors-background" onClick={this.handleBlur}></div>
                                </div>
                            ) : null}
                        </div> 

                        <div className="birthdate-dropdown">
                            <label> Birthday Optional</label>
                            <div>
                            <select className="birthday">
                                    <option placeholder="Month">Month</option>
                                    <option value="01">Jan</option>
                                    <option value="02">Feb</option>
                                    <option value="03">Mar</option>
                                    <option value="04">Apr</option>
                                    <option value="05">May</option>
                                    <option value="06">Jun</option>
                                    <option value="07">Jul</option>
                                    <option value="08">Aug</option>
                                    <option value="09">Sep</option>
                                    <option value="10">Oct</option>
                                    <option value="11">Nov</option>
                                    <option value="12">Dec</option>
                                </select>
                                <select className="birthday">
                                    <option placeholder="Day">Day</option>
                                    <option value="01">01</option>
                                    <option value="02">02</option>
                                    <option value="03">03</option>
                                    <option value="04">04</option>
                                    <option value="05">05</option>
                                    <option value="06">06</option>
                                    <option value="07">07</option>
                                    <option value="08">08</option>
                                    <option value="09">09</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>
                                </select>
                                <select className="birthday">
                                    <option placeholder="Year">Month</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                    <option value="2018">2018</option>
                                    <option value="2017">2017</option>
                                    <option value="2016">2016</option>
                                    <option value="2015">2015</option>
                                    <option value="2014">2014</option>
                                    <option value="2013">2013</option>
                                    <option value="2012">2012</option>
                                    <option value="2011">2011</option>
                                    <option value="2010">2010</option>
                                    <option value="2009">2009</option>
                                    <option value="2008">2008</option>
                                    <option value="2007">2007</option>
                                    <option value="2006">2006</option>
                                    <option value="2005">2005</option>
                                    <option value="2004">2004</option>
                                    <option value="2003">2003</option>
                                    <option value="2002">2002</option>
                                    <option value="2001">2001</option>
                                    <option value="2000">2000</option>
                                    <option value="1999">1999</option>
                                    <option value="1998">1998</option>
                                    <option value="1997">1997</option>
                                    <option value="1996">1996</option>
                                    <option value="1995">1995</option>
                                    <option value="1994">1994</option>
                                    <option value="1993">1993</option>
                                    <option value="1992">1992</option>
                                    <option value="1991">1991</option>
                                    <option value="1990">1990</option>
                                    <option value="1989">1989</option>
                                    <option value="1988">1988</option>
                                    <option value="1987">1987</option>
                                    <option value="1986">1986</option>
                                    <option value="1985">1985</option>
                                    <option value="1984">1984</option>
                                    <option value="1983">1983</option>
                                    <option value="1982">1982</option>
                                    <option value="1981">1981</option>
                                    <option value="1980">1980</option>
                                    <option value="1979">1979</option>
                                    <option value="1978">1978</option>
                                    <option value="1977">1977</option>
                                    <option value="1976">1976</option>
                                    <option value="1975">1975</option>
                                    <option value="1974">1974</option>
                                    <option value="1973">1973</option>
                                    <option value="1972">1972</option>
                                    <option value="1971">1971</option>
                                    <option value="1970">1970</option>
                                    <option value="1969">1969</option>
                                    <option value="1968">1968</option>
                                    <option value="1967">1967</option>
                                    <option value="1966">1966</option>
                                    <option value="1965">1965</option>
                                    <option value="1964">1964</option>
                                    <option value="1963">1963</option>
                                    <option value="1962">1962</option>
                                    <option value="1961">1961</option>
                                    <option value="1960">1960</option>
                                    <option value="1959">1959</option>
                                    <option value="1958">1958</option>
                                    <option value="1957">1957</option>
                                    <option value="1956">1956</option>
                                    <option value="1955">1955</option>
                                    <option value="1954">1954</option>
                                    <option value="1953">1953</option>
                                    <option value="1952">1952</option>
                                    <option value="1951">1951</option>
                                    <option value="1950">1950</option>
                                    <option value="1949">1949</option>
                                    <option value="1948">1948</option>
                                    <option value="1947">1947</option>
                                    <option value="1946">1946</option>
                                    <option value="1945">1945</option>
                                    <option value="1944">1944</option>
                                    <option value="1943">1943</option>
                                    <option value="1942">1942</option>
                                    <option value="1941">1941</option>
                                    <option value="1940">1940</option>
                                    <option value="1939">1939</option>
                                    <option value="1938">1938</option>
                                    <option value="1937">1937</option>
                                    <option value="1936">1936</option>
                                    <option value="1935">1935</option>
                                    <option value="1934">1934</option>
                                    <option value="1933">1933</option>
                                    <option value="1932">1932</option>
                                    <option value="1931">1931</option>
                                    <option value="1930">1930</option>
                                    <option value="1929">1929</option>
                                    <option value="1928">1928</option>
                                    <option value="1927">1927</option>
                                    <option value="1926">1926</option>
                                    <option value="1925">1925</option>
                                    <option value="1924">1924</option>
                                    <option value="1923">1923</option>
                                    <option value="1922">1922</option>
                                    <option value="1921">1921</option>
                                    <option value="1920">1920</option>
                                    <option value="1919">1919</option>
                                    <option value="1918">1918</option>
                                    <option value="1917">1917</option>
                                    <option value="1916">1916</option>
                                    <option value="1915">1915</option>
                                    <option value="1914">1914</option>
                                    <option value="1913">1913</option>
                                    <option value="1912">1912</option>
                                    <option value="1911">1911</option>
                                    <option value="1910">1910</option>
                                    <option value="1909">1909</option>
                                    <option value="1908">1908</option>
                                    <option value="1907">1907</option>
                                    <option value="1906">1906</option>
                                    <option value="1905">1905</option>
                                    <option value="1904">1904</option>
                                    <option value="1903">1903</option>
                                    <option value="1902">1902</option>
                                    <option value="1901">1901</option>
                                </select>
                            </div>
                        </div>
                        
                        <input className="submit" type="submit" value="Sign Up" />
                            <p className="session-form-foot">Already on Gelp? <Link to="/login" onClick={this.clearErrors}>Log in</Link></p>
                    </form>
                    <img className="illustration" src={window.illustrationURL} />
                </div>
                    <footer>
                        <div className="mylinks">
                            <p className="about-user-title">About</p>
                            <a href="https://www.linkedin.com/in/dennis-lum-12526b7a/" target="_blank">Linkedin</a>
                            <a href="https://github.com/dlum904" target="_blank"> Git Hub</a>
                            <a href="https://angel.co/u/dennis-lum" target="_blank"> Angel List</a>
                            <a href="https://dlum904.github.io/dlum/" target="_blank"> About Me</a>
                        </div>
                        <img src={window.footerURL} alt="" />
                    </footer>
                </div>
            )
        }
    }

}

export default SessionForm;
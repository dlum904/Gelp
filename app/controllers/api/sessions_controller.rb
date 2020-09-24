class Api::SessionsController < ApplicationController
    # skip_before_action :verify_authenticity_token

    def create
      @user = User.find_by_credentials(
        params[:user][:email],
        params[:user][:password]
        )

        if @user
            login(@user)
        else
            render json: "The email address or password you entered is incorrect.", status: 401
        end
    end

    def destroy
        if logged_in?
            logout
        else
            render json: "Already signed out", status: 404
        end
    end
end
class SessionsController < ApplicationController
    skip_before_action :authorized, only: :create
    
    def click
        cookies[:click] ||= 0
        cookies[:click] = cookies[:click].to_i + 1
        session[:click] ||= 0
        session[:click] += 1
    end

    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
        session[:user_id] = user.id
        render json: user, status: :created
        else
            render json: {error: {login: "Invalid username or password"}}, status: :unauthorized
      end
    end

      def destroy
        session.delete :user_id
        head :no_content
      end
end
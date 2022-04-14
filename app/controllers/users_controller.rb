class UsersController < ApplicationController
  skip_before_action :authorized, only: :create

    def create
        user = User.create!(user_params)
        render json: user
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
          render json: user
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
      end

      def update
        user = User.find_by!(id: params[:id])
          user.update(user_params)
          if user.valid?
          render json: user, status: :ok
          else 
          render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
          end
        end

      private

      def user_params
        params.permit(:username, :password, :name, :email, :age, :admin)
      end
end

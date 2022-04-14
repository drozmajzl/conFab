class SetlistsController < ApplicationController
    skip_before_action :authorized, only: [:index, :create, :show, :destroy, :user_setlists]

    def create
        setlist = Setlist.create!(setlist_params)
        render json: setlist
    end

    def index
        setlists = Setlist.all
        render json: setlists, status: :ok
    end

    def show
        setlist = Setlist.find(params[:id])
        render json: setlist, status: :ok
    end

    def destroy
        setlist = Setlist.find(params[:id])
        setlist.destroy
        head :no_content
    end

    def user_setlists
        current_user = User.find_by(id:session[:user_id])
        setlists = Setlist.where(user_id: current_user.id)
        render json: setlists, status: :ok
    end

    private

    def setlist_params
        params.permit(:name, :user_id)
    end
end

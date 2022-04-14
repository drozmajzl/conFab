class TracksController < ApplicationController
    before_action :authorize
    skip_before_action :authorize, only: [:index]

    def index
        tracks = Track.all
        render json: tracks, status: :ok
    end

    def show
        track = Track.find(params[:id])
        render json: message, status: :ok
    end

    private

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
      end
end

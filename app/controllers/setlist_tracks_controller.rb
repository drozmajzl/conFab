class SetlistTracksController < ApplicationController

    def create
        setlist_track = SetlistTrack.create!(setlist_params)
        render json: setlist_track
    end

    def destroy
        setlist = SetlistTrack.find(params[:id])
        setlist.destroy
        head :no_content
    end

    private

    def setlist_params
        params.permit(:setlist_id, :track_id)
    end
end

class AlbumsController < ApplicationController
    
    def index
        albums = Album.all
        render json: albums, status: :ok
    end

    def show
        album = Album.find(params[:id])
        render json: message, status: :ok
    end

end

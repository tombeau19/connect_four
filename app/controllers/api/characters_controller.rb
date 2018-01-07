class Api::CharactersController < ApplicationController

    def index
        @characters = Character.all
        render json: @characters
    end

    def show
        @character = Character.find_by_id(params[:id])
        render json: @character
    end

end

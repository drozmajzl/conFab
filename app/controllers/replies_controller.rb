class RepliesController < ApplicationController
    def index
        replies = Reply.all
        render json: replies, status: :ok
    end

    def show
        reply = Reply.find(params[:id])
        render json: message, status: :ok
    end

    def create
        reply = Reply.create!(reply_params)
        render json: reply
    end

    def destroy
        reply = Reply.find(params[:id])
        reply.destroy
        head :no_content
    end

      private

      def reply_params
        params.permit(:user_id, :comment_id, :likes, :reply_body)
      end
end

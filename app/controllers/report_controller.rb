class ReportController < ApplicationController
	def index
		if session[:user_id]
			user = User.find(session[:user_id])
			if user && user.permissions == "administrator"
				@songs = Song.all
				@users = User.all
			else
				redirect_to '/', notice: "You are not authorized to access this page."
			end
		else
			redirect_to '/', notice: "You are not logged in."
		end
	end

	def users
	end

	def songs
	end
end
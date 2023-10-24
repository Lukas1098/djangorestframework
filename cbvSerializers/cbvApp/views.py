from django.shortcuts import render
from cbvApp.models import Passenger
from cbvApp.serializers import PassengerSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from django.http import Http404
from rest_framework import generics, mixins
from rest_framework import viewsets
from rest_framework.pagination import PageNumberPagination, LimitOffsetPagination
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters


class PassengerPagination(PageNumberPagination):
    page_size = 2


class PassengerViewSet(viewsets.ModelViewSet):
    queryset = Passenger.objects.all()
    serializer_class = PassengerSerializer
    pagination_class = LimitOffsetPagination
    filter_backends = [filters.SearchFilter]
    search_fields = ['lastName', 'travelPoints']


"""
class PassengerList(generics.ListCreateAPIView):
    queryset = Passenger.objects.all()
    serializer_class = PassengerSerializer


class PassengerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Passenger.objects.all()
    serializer_class = PassengerSerializer



class PassengerList(mixins.ListModelMixin, mixins.CreateModelMixin, generics.GenericAPIView):
    queryset = Passenger.objects.all()
    serializer_class = PassengerSerializer

    def get(self, request):
        return self.list(request)

    def post(self, request):
        return self.create(request)


class PassengerDetail(mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin,
                      generics.GenericAPIView):
    queryset = Passenger.objects.all()
    serializer_class = PassengerSerializer

    def get(self, request, pk):
        return self.retrieve(request, pk)

    def put(self, request, pk):
        return self.update(request, pk)

    def delete(self, request, pk):
        return self.destroy(request, pk)



# Create your views here.
class PassengerList(APIView):

    def get(self, request):
        passengers = Passenger.objects.all()
        serializer = PassengerSerializer(passengers, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = PassengerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PassengerDetail(APIView):
    def get_object(self, pk):
        try:
            return Passenger.objects.get(pk=pk)
        except Passenger.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        passenger = self.get_object(pk)
        serializer = PassengerSerializer(passenger)
        return Response(serializer.data)

    def put(self, request, pk):
        passenger = self.get_object(pk)
        serializer = PassengerSerializer(passenger, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self,request,pk):
        passenger = self.get_object(pk)
        passenger.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    """

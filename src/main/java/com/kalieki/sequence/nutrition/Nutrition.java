package com.kalieki.sequence.nutrition;

import java.net.URI;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.utils.URIBuilder;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.util.EntityUtils;

import com.fasterxml.jackson.databind.ObjectMapper;

public class Nutrition {
	private static final int SATURATED_FAT_WARNING_LIMIT = 4;
	private static final String USDA_API_KEY = "nwSaT7pQlZq9vH1Vv4Ng0gJcTy3w2P6JW8xKCiDh";
	private static final String SEARCH_REQUEST_TEMPLATE = "http://api.nal.usda.gov/ndb/search/";// ?format=json&q=%s&max=1&offset=0&api_key=%s";
	private static final String NUTRITION_REQUEST_TEMPLATE = "http://api.nal.usda.gov/ndb/V2/reports";// ?ndbno=%s&format=json&api_key=%s";

	private static final String FATTY_ACIDS_TOTAL_SATURATED = "606";

	private static final HttpClient CLIENT = HttpClientBuilder.create().build();
	private static final ObjectMapper MAPPER = new ObjectMapper();

	private static Map<String, FoodItem> cachedItemForQuery = new HashMap<String, FoodItem>();
	private static Map<String, List<Nutrient>> cachedNutrients = new HashMap<String, List<Nutrient>>();

	public static void main(String[] args) throws Exception {
		StringBuilder builder = new StringBuilder();
		for (String food : Arrays.asList("salted butter", "corn flakes", "ribeye steak", "frozen french fries",
				"carrot juice", "green peas")) {
			builder.append(food + " is this bad for me? " + doesFoodGetSaturatedFatWarning(food) + "\n");
		}
		System.err.println(builder.toString());
	}

	public static boolean doesFoodGetSaturatedFatWarning(String foodQuery) throws Exception {
		String id = getItemForQuery(foodQuery).getNdbno();

		if (id == null) {
			return false;
		}

		List<Nutrient> nutrients = getNutrientsById(id);

		boolean saturatedFatWarning = false;

		for (Nutrient nutrient : nutrients) {
			if (FATTY_ACIDS_TOTAL_SATURATED.equals(nutrient.getNutrient_id())) {
				if (Double.parseDouble(nutrient.getValue()) > SATURATED_FAT_WARNING_LIMIT) {
					saturatedFatWarning = true;
				}
			}
		}

		return saturatedFatWarning;
	}

	private static List<Nutrient> getNutrientsById(String id) throws Exception {
		if (!cachedNutrients.containsKey(id)) {
			URI uri = new URIBuilder(NUTRITION_REQUEST_TEMPLATE).addParameter("format", "json")
					.addParameter("ndbno", id).addParameter("api_key", USDA_API_KEY).build();

			HttpGet getNutrition = new HttpGet(uri);
			HttpResponse nutritionResponse = CLIENT.execute(getNutrition);
			UsdaReports foods = MAPPER.readValue(nutritionResponse.getEntity().getContent(), UsdaReports.class);
			List<Nutrient> nutrients = foods.getFood().get(0).getFood().getNutrients();

			cachedNutrients.put(id, nutrients);
		}

		return cachedNutrients.get(id);
	}

	private static FoodItem getItemForQuery(String query) throws Exception {
		if (!cachedItemForQuery.containsKey(query)) {
			URI uri = new URIBuilder(SEARCH_REQUEST_TEMPLATE).addParameter("format", "json").addParameter("q", query)
					.addParameter("max", "1").addParameter("offset", "0").addParameter("api_key", USDA_API_KEY).build();
			HttpGet getSearch = new HttpGet(uri);

			HttpResponse response = CLIENT.execute(getSearch);

			String entity = EntityUtils.toString(response.getEntity());

			UsdaSearch search = MAPPER.readValue(entity, UsdaSearch.class);

			if (search.getErrors() == null) {
				FoodItem id = search.getList().getItem().get(0);
				cachedItemForQuery.put(query, id);
			} else {
				cachedItemForQuery.put(query, null);
			}
		}

		return cachedItemForQuery.get(query);
	}

	public static String getFoodItemName(String query) {
		String fullName = cachedItemForQuery.get(query).getName();
		return fullName.substring(0, fullName.length() > 80 ? 80 : fullName.length());
	}
}
